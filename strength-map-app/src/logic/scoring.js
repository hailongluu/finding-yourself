// Scoring logic for quiz results
export const calculateArchetypeScores = (answers) => {
  const scores = {
    expertAdvisor: 0,
    contentEducator: 0,
    systemBuilder: 0,
    communityConnector: 0,
    productizedSpecialist: 0,
    dealMaker: 0
  };

  // Calculate scores from all answers
  answers.forEach(answer => {
    if (answer.score) {
      Object.keys(answer.score).forEach(archetype => {
        if (scores.hasOwnProperty(archetype)) {
          scores[archetype] += answer.score[archetype];
        }
      });
    }
  });

  return scores;
};

export const getPrimaryAndSecondaryArchetypes = (scores) => {
  const sortedArchetypes = Object.entries(scores)
    .sort(([, a], [, b]) => b - a);

  return {
    primary: sortedArchetypes[0][0],
    primaryScore: sortedArchetypes[0][1],
    secondary: sortedArchetypes[1][0],
    secondaryScore: sortedArchetypes[1][1]
  };
};

export const calculateCapabilityScores = (answers, archetypeScores) => {
  // Base capability scores
  const capabilities = {
    expertise: 50,
    creativity: 50,
    communication: 50,
    sales: 50,
    analysis: 50,
    operations: 50,
    discipline: 50,
    learning: 50
  };

  // Adjust based on answers
  answers.forEach(answer => {
    const value = answer.value;

    // Skill-based adjustments
    if (value === 'expertise') capabilities.expertise += 15;
    if (value === 'creative') capabilities.creativity += 15;
    if (value === 'communication') capabilities.communication += 15;
    if (value === 'analysis') capabilities.analysis += 15;
    if (value === 'execution') capabilities.operations += 15;

    // Work style adjustments
    if (value === 'advisor') {
      capabilities.expertise += 10;
      capabilities.communication += 10;
    }
    if (value === 'content') {
      capabilities.creativity += 10;
      capabilities.communication += 10;
    }
    if (value === 'system') {
      capabilities.analysis += 10;
      capabilities.operations += 10;
    }
    if (value === 'sales') {
      capabilities.sales += 15;
      capabilities.communication += 5;
    }

    // Experience adjustments
    if (value === '5-10' || value === '10+') {
      capabilities.expertise += 10;
      capabilities.discipline += 5;
    }

    // Help type adjustments
    if (value === 'explain') capabilities.communication += 8;
    if (value === 'technical') capabilities.analysis += 8;
    if (value === 'advise') capabilities.expertise += 8;
    if (value === 'connect') capabilities.communication += 8;
    if (value === 'document') capabilities.operations += 8;
    if (value === 'sell') capabilities.sales += 8;
  });

  // Normalize to 0-100 range
  Object.keys(capabilities).forEach(key => {
    capabilities[key] = Math.min(100, Math.max(0, capabilities[key]));
  });

  return capabilities;
};

export const identifyTopStrengths = (capabilityScores, archetypeScores) => {
  const strengthMap = {
    expertise: 'Chuyên môn sâu',
    creativity: 'Tư duy sáng tạo',
    communication: 'Giao tiếp hiệu quả',
    sales: 'Kỹ năng bán hàng',
    analysis: 'Phân tích vấn đề',
    operations: 'Vận hành hệ thống',
    discipline: 'Kỷ luật công việc',
    learning: 'Học hỏi nhanh'
  };

  const strengthMapEn = {
    expertise: 'Deep Expertise',
    creativity: 'Creative Thinking',
    communication: 'Effective Communication',
    sales: 'Sales Skills',
    analysis: 'Problem Analysis',
    operations: 'System Operations',
    discipline: 'Work Discipline',
    learning: 'Fast Learning'
  };

  // Sort capabilities by score
  const sortedCapabilities = Object.entries(capabilityScores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return sortedCapabilities.map(([key, score]) => ({
    key,
    nameVi: strengthMap[key],
    nameEn: strengthMapEn[key],
    score
  }));
};

export const identifyAvailableAssets = (answers) => {
  const assets = [];
  const assetMap = {
    '5-10': { vi: 'Kinh nghiệm ngành 5-10 năm', en: '5-10 years industry experience' },
    '10+': { vi: 'Kinh nghiệm ngành hơn 10 năm', en: '10+ years industry experience' },
    'wide_network': { vi: 'Mạng lưới rộng trong ngành', en: 'Wide industry network' },
    'small_network': { vi: 'Nhóm đồng nghiệp tin cậy', en: 'Trusted colleague group' },
    'active': { vi: 'Kênh social đang hoạt động', en: 'Active social channels' },
    'marketing_sales': { vi: 'Hiểu biết marketing & sales', en: 'Marketing & sales knowledge' },
    'tech': { vi: 'Kỹ năng công nghệ', en: 'Technology skills' },
    'finance': { vi: 'Hiểu biết tài chính', en: 'Financial knowledge' },
    'hr': { vi: 'Kinh nghiệm tổ chức & đào tạo', en: 'Organization & training experience' },
    'creative': { vi: 'Kỹ năng sáng tạo nội dung', en: 'Content creation skills' },
    'consulting': { vi: 'Kinh nghiệm tư vấn', en: 'Consulting experience' }
  };

  answers.forEach(answer => {
    if (assetMap[answer.value]) {
      assets.push(assetMap[answer.value]);
    }
  });

  // Add default assets based on common patterns
  if (assets.length < 3) {
    assets.push(
      { vi: 'Hiểu biết môi trường doanh nghiệp', en: 'Understanding of business environment' },
      { vi: 'Kỹ năng làm việc có kỷ luật', en: 'Disciplined work skills' }
    );
  }

  return assets.slice(0, 5);
};

export const identifyMainBlocker = (answers, primaryArchetype) => {
  const blockerAnswers = answers.filter(a =>
    a.questionId === 'blocker_01' || a.questionId === 'blocker_02'
  );

  // Default blockers by archetype
  const defaultBlockers = {
    expertAdvisor: {
      vi: 'Điểm nghẽn hiện tại của bạn không phải là thiếu năng lực, mà là chưa đóng gói năng lực thành một lời đề nghị rõ ràng.',
      en: 'Your current blocker is not lack of capability, but not yet packaging your capability into a clear offer.'
    },
    contentEducator: {
      vi: 'Bạn cần một hệ thống tạo nội dung đều đặn và kiên nhẫn xây dựng niềm tin trước khi có doanh thu.',
      en: 'You need a consistent content creation system and patience to build trust before revenue.'
    },
    systemBuilder: {
      vi: 'Điểm nghẽn là xu hướng xây quá nhiều trước khi kiểm chứng nhu cầu thực tế.',
      en: 'The blocker is the tendency to build too much before validating real demand.'
    },
    communityConnector: {
      vi: 'Bạn cần năng lượng vận hành cộng đồng liên tục và thời gian để xây dựng niềm tin.',
      en: 'You need continuous energy to operate the community and time to build trust.'
    },
    productizedSpecialist: {
      vi: 'Bạn cần định nghĩa phạm vi dịch vụ rõ ràng để tránh làm quá nhiều cho mỗi khách hàng.',
      en: 'You need to define clear service scope to avoid overdelivering for each client.'
    },
    dealMaker: {
      vi: 'Bạn cần tìm sản phẩm/dịch vụ tốt để bán và xây dựng niềm tin với thị trường.',
      en: 'You need to find good products/services to sell and build market trust.'
    }
  };

  return defaultBlockers[primaryArchetype] || defaultBlockers.productizedSpecialist;
};

export const generateRecommendedDirections = (primaryArchetype, secondaryArchetype, capabilityScores) => {
  const directions = {
    expertAdvisor: [
      {
        nameVi: 'Tư vấn 1:1',
        nameEn: '1:1 Consulting',
        fit: 95,
        difficulty: 'medium',
        timeToLaunch: '2-4 tuần',
        reasonVi: 'Tận dụng kinh nghiệm sâu, bắt đầu nhanh với khách hàng cá nhân',
        reasonEn: 'Leverage deep experience, quick start with individual clients'
      },
      {
        nameVi: 'Gói Audit chuyên môn',
        nameEn: 'Professional Audit Package',
        fit: 90,
        difficulty: 'medium',
        timeToLaunch: '3-5 tuần',
        reasonVi: 'Dịch vụ đóng gói rõ ràng, dễ bán và scale',
        reasonEn: 'Clearly packaged service, easy to sell and scale'
      },
      {
        nameVi: 'Workshop nhỏ',
        nameEn: 'Small Workshop',
        fit: 80,
        difficulty: 'high',
        timeToLaunch: '4-6 tuần',
        reasonVi: 'Phục vụ nhiều người cùng lúc, tăng thu nhập',
        reasonEn: 'Serve multiple people at once, increase income'
      }
    ],
    contentEducator: [
      {
        nameVi: 'Newsletter chuyên môn',
        nameEn: 'Professional Newsletter',
        fit: 95,
        difficulty: 'low',
        timeToLaunch: '1-2 tuần',
        reasonVi: 'Bắt đầu nhanh, xây dựng audience đều đặn',
        reasonEn: 'Quick start, build audience consistently'
      },
      {
        nameVi: 'Khóa học mini',
        nameEn: 'Mini Course',
        fit: 90,
        difficulty: 'medium',
        timeToLaunch: '4-6 tuần',
        reasonVi: 'Đóng gói kiến thức thành sản phẩm, doanh thu thụ động',
        reasonEn: 'Package knowledge into product, passive income'
      },
      {
        nameVi: 'Template & Checklist',
        nameEn: 'Templates & Checklists',
        fit: 85,
        difficulty: 'low',
        timeToLaunch: '2-3 tuần',
        reasonVi: 'Sản phẩm đơn giản, giá trị rõ ràng',
        reasonEn: 'Simple product, clear value'
      }
    ],
    systemBuilder: [
      {
        nameVi: 'Template chuyên ngành',
        nameEn: 'Industry Templates',
        fit: 95,
        difficulty: 'medium',
        timeToLaunch: '3-5 tuần',
        reasonVi: 'Biến quy trình thành công cụ tái sử dụng',
        reasonEn: 'Turn processes into reusable tools'
      },
      {
        nameVi: 'Dashboard & Reports',
        nameEn: 'Dashboards & Reports',
        fit: 90,
        difficulty: 'high',
        timeToLaunch: '6-8 tuần',
        reasonVi: 'Giải quyết vấn đề phân tích dữ liệu',
        reasonEn: 'Solve data analysis problems'
      },
      {
        nameVi: 'Automation tools',
        nameEn: 'Automation Tools',
        fit: 85,
        difficulty: 'high',
        timeToLaunch: '8-12 tuần',
        reasonVi: 'Tối ưu hóa công việc lặp đi lặp lại',
        reasonEn: 'Optimize repetitive work'
      }
    ],
    communityConnector: [
      {
        nameVi: 'Cộng đồng ngách',
        nameEn: 'Niche Community',
        fit: 95,
        difficulty: 'medium',
        timeToLaunch: '4-6 tuần',
        reasonVi: 'Kết nối người có cùng quan tâm',
        reasonEn: 'Connect people with shared interests'
      },
      {
        nameVi: 'Event & Workshop',
        nameEn: 'Events & Workshops',
        fit: 90,
        difficulty: 'medium',
        timeToLaunch: '3-5 tuần',
        reasonVi: 'Tạo giá trị qua kết nối trực tiếp',
        reasonEn: 'Create value through direct connections'
      },
      {
        nameVi: 'Membership trả phí',
        nameEn: 'Paid Membership',
        fit: 80,
        difficulty: 'high',
        timeToLaunch: '6-8 tuần',
        reasonVi: 'Thu nhập đều từ cộng đồng trung thành',
        reasonEn: 'Steady income from loyal community'
      }
    ],
    productizedSpecialist: [
      {
        nameVi: 'Gói dịch vụ cố định',
        nameEn: 'Fixed Service Package',
        fit: 95,
        difficulty: 'low',
        timeToLaunch: '1-3 tuần',
        reasonVi: 'Bắt đầu nhanh từ kỹ năng hiện có',
        reasonEn: 'Quick start from existing skills'
      },
      {
        nameVi: 'Done-for-you service',
        nameEn: 'Done-for-You Service',
        fit: 90,
        difficulty: 'medium',
        timeToLaunch: '2-4 tuần',
        reasonVi: 'Phạm vi rõ ràng, dễ tạo doanh thu',
        reasonEn: 'Clear scope, easy to generate revenue'
      },
      {
        nameVi: 'Setup & Implementation',
        nameEn: 'Setup & Implementation',
        fit: 85,
        difficulty: 'medium',
        timeToLaunch: '3-5 tuần',
        reasonVi: 'Giải quyết vấn đề cụ thể cho khách hàng',
        reasonEn: 'Solve specific problems for clients'
      }
    ],
    dealMaker: [
      {
        nameVi: 'Affiliate marketing',
        nameEn: 'Affiliate Marketing',
        fit: 90,
        difficulty: 'low',
        timeToLaunch: '1-2 tuần',
        reasonVi: 'Không cần tạo sản phẩm, tập trung bán hàng',
        reasonEn: 'No product creation needed, focus on sales'
      },
      {
        nameVi: 'Môi giới dịch vụ',
        nameEn: 'Service Brokerage',
        fit: 95,
        difficulty: 'medium',
        timeToLaunch: '2-4 tuần',
        reasonVi: 'Kết nối cung cầu, hoa hồng từ giao dịch',
        reasonEn: 'Connect supply and demand, commission from deals'
      },
      {
        nameVi: 'Partnership deals',
        nameEn: 'Partnership Deals',
        fit: 85,
        difficulty: 'high',
        timeToLaunch: '4-8 tuần',
        reasonVi: 'Xây dựng quan hệ đối tác dài hạn',
        reasonEn: 'Build long-term partnership relationships'
      }
    ]
  };

  return directions[primaryArchetype] || directions.productizedSpecialist;
};
