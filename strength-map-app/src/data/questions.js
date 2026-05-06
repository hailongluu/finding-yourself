// Quiz questions organized by sections
export const quizSections = {
  background: 'background',
  skills: 'skills',
  workStyle: 'work_style',
  resources: 'resources',
  motivation: 'motivation',
  blockers: 'blockers'
};

export const questions = [
  // BACKGROUND SECTION
  {
    id: 'bg_01',
    section: 'background',
    questionVi: 'Bạn đang làm trong lĩnh vực nào?',
    questionEn: 'What field are you currently working in?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Marketing / Sales / Kinh doanh',
        labelEn: 'Marketing / Sales / Business',
        value: 'marketing_sales',
        score: { dealMaker: 2, contentEducator: 1 }
      },
      {
        labelVi: 'Công nghệ / IT / Developer',
        labelEn: 'Technology / IT / Developer',
        value: 'tech',
        score: { systemBuilder: 3, productizedSpecialist: 1 }
      },
      {
        labelVi: 'Tài chính / Kế toán / Phân tích',
        labelEn: 'Finance / Accounting / Analysis',
        value: 'finance',
        score: { expertAdvisor: 2, systemBuilder: 1 }
      },
      {
        labelVi: 'Nhân sự / Đào tạo / Tổ chức',
        labelEn: 'HR / Training / Organization',
        value: 'hr',
        score: { communityConnector: 2, contentEducator: 1 }
      },
      {
        labelVi: 'Thiết kế / Sáng tạo / Nội dung',
        labelEn: 'Design / Creative / Content',
        value: 'creative',
        score: { contentEducator: 2, productizedSpecialist: 1 }
      },
      {
        labelVi: 'Tư vấn / Quản lý dự án',
        labelEn: 'Consulting / Project Management',
        value: 'consulting',
        score: { expertAdvisor: 3 }
      }
    ]
  },

  {
    id: 'bg_02',
    section: 'background',
    questionVi: 'Bạn có bao nhiêu năm kinh nghiệm làm việc?',
    questionEn: 'How many years of work experience do you have?',
    type: 'single_choice',
    options: [
      {
        labelVi: '1-3 năm',
        labelEn: '1-3 years',
        value: '1-3',
        score: { contentEducator: 1, productizedSpecialist: 1 }
      },
      {
        labelVi: '3-5 năm',
        labelEn: '3-5 years',
        value: '3-5',
        score: { productizedSpecialist: 2, expertAdvisor: 1 }
      },
      {
        labelVi: '5-10 năm',
        labelEn: '5-10 years',
        value: '5-10',
        score: { expertAdvisor: 2, systemBuilder: 1 }
      },
      {
        labelVi: 'Hơn 10 năm',
        labelEn: 'More than 10 years',
        value: '10+',
        score: { expertAdvisor: 3 }
      }
    ]
  },

  {
    id: 'bg_03',
    section: 'background',
    questionVi: 'Bạn có thể dành bao nhiêu giờ mỗi tuần cho kinh doanh online?',
    questionEn: 'How many hours per week can you dedicate to online business?',
    type: 'single_choice',
    options: [
      {
        labelVi: '3-5 giờ/tuần',
        labelEn: '3-5 hours/week',
        value: '3-5',
        score: { productizedSpecialist: 2, contentEducator: 1 }
      },
      {
        labelVi: '5-10 giờ/tuần',
        labelEn: '5-10 hours/week',
        value: '5-10',
        score: { productizedSpecialist: 1, expertAdvisor: 1, contentEducator: 1 }
      },
      {
        labelVi: '10-20 giờ/tuần',
        labelEn: '10-20 hours/week',
        value: '10-20',
        score: { expertAdvisor: 1, systemBuilder: 1, dealMaker: 1 }
      },
      {
        labelVi: 'Hơn 20 giờ/tuần',
        labelEn: 'More than 20 hours/week',
        value: '20+',
        score: { systemBuilder: 2, communityConnector: 1 }
      }
    ]
  },

  // SKILLS SECTION
  {
    id: 'skill_01',
    section: 'skills',
    questionVi: 'Người khác thường nhờ bạn giúp việc gì?',
    questionEn: 'What do people usually ask you for help with?',
    type: 'multiple_choice',
    maxSelections: 3,
    options: [
      {
        labelVi: 'Giải thích vấn đề phức tạp',
        labelEn: 'Explaining complex issues',
        value: 'explain',
        score: { contentEducator: 2, expertAdvisor: 1 }
      },
      {
        labelVi: 'Giải quyết vấn đề kỹ thuật',
        labelEn: 'Solving technical problems',
        value: 'technical',
        score: { systemBuilder: 2, productizedSpecialist: 1 }
      },
      {
        labelVi: 'Tư vấn quyết định',
        labelEn: 'Decision consulting',
        value: 'advise',
        score: { expertAdvisor: 3 }
      },
      {
        labelVi: 'Kết nối người với người',
        labelEn: 'Connecting people',
        value: 'connect',
        score: { communityConnector: 3 }
      },
      {
        labelVi: 'Tạo tài liệu / Quy trình',
        labelEn: 'Creating documents / Processes',
        value: 'document',
        score: { systemBuilder: 2, contentEducator: 1 }
      },
      {
        labelVi: 'Thuyết phục / Bán hàng',
        labelEn: 'Persuading / Selling',
        value: 'sell',
        score: { dealMaker: 3 }
      }
    ]
  },

  {
    id: 'skill_02',
    section: 'skills',
    questionVi: 'Bạn tự tin nhất với loại năng lực nào?',
    questionEn: 'Which capability are you most confident in?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Chuyên môn sâu trong lĩnh vực',
        labelEn: 'Deep domain expertise',
        value: 'expertise',
        score: { expertAdvisor: 3, productizedSpecialist: 1 }
      },
      {
        labelVi: 'Tư duy sáng tạo / Ý tưởng mới',
        labelEn: 'Creative thinking / New ideas',
        value: 'creative',
        score: { contentEducator: 2, systemBuilder: 1 }
      },
      {
        labelVi: 'Giao tiếp / Trình bày',
        labelEn: 'Communication / Presentation',
        value: 'communication',
        score: { contentEducator: 2, communityConnector: 1 }
      },
      {
        labelVi: 'Phân tích / Giải quyết vấn đề',
        labelEn: 'Analysis / Problem solving',
        value: 'analysis',
        score: { systemBuilder: 2, expertAdvisor: 1 }
      },
      {
        labelVi: 'Xây dựng mối quan hệ',
        labelEn: 'Building relationships',
        value: 'relationship',
        score: { communityConnector: 3, dealMaker: 1 }
      },
      {
        labelVi: 'Thực thi / Hoàn thành công việc',
        labelEn: 'Execution / Getting things done',
        value: 'execution',
        score: { productizedSpecialist: 3 }
      }
    ]
  },

  {
    id: 'skill_03',
    section: 'skills',
    questionVi: 'Bạn có thể giải thích một chủ đề phức tạp cho người khác dễ hiểu không?',
    questionEn: 'Can you explain complex topics to others in an easy-to-understand way?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Rất tốt, tôi thường làm việc này',
        labelEn: 'Very well, I do this often',
        value: 'excellent',
        score: { contentEducator: 3, expertAdvisor: 1 }
      },
      {
        labelVi: 'Khá tốt, tôi có thể làm được',
        labelEn: 'Pretty well, I can do it',
        value: 'good',
        score: { contentEducator: 2, expertAdvisor: 1 }
      },
      {
        labelVi: 'Trung bình, tùy chủ đề',
        labelEn: 'Average, depends on topic',
        value: 'average',
        score: { productizedSpecialist: 1 }
      },
      {
        labelVi: 'Chưa tốt lắm, tôi thích làm hơn nói',
        labelEn: 'Not great, I prefer doing over explaining',
        value: 'prefer_doing',
        score: { systemBuilder: 2, productizedSpecialist: 1 }
      }
    ]
  },

  // WORK STYLE SECTION
  {
    id: 'style_01',
    section: 'work_style',
    questionVi: 'Bạn thấy mình tạo giá trị tốt nhất theo cách nào?',
    questionEn: 'How do you create value most naturally?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Tư vấn và giải thích trực tiếp cho người khác',
        labelEn: 'Advising and explaining directly to others',
        value: 'advisor',
        score: { expertAdvisor: 3, contentEducator: 1 }
      },
      {
        labelVi: 'Tạo nội dung để nhiều người học hỏi',
        labelEn: 'Creating content for many to learn',
        value: 'content',
        score: { contentEducator: 3 }
      },
      {
        labelVi: 'Xây quy trình, tài liệu hoặc hệ thống',
        labelEn: 'Building processes, documents, or systems',
        value: 'system',
        score: { systemBuilder: 3, productizedSpecialist: 2 }
      },
      {
        labelVi: 'Kết nối và xây dựng cộng đồng',
        labelEn: 'Connecting and building community',
        value: 'community',
        score: { communityConnector: 3 }
      },
      {
        labelVi: 'Làm dịch vụ cụ thể cho khách hàng',
        labelEn: 'Delivering specific services to clients',
        value: 'service',
        score: { productizedSpecialist: 3 }
      },
      {
        labelVi: 'Bán và kết nối sản phẩm với người cần',
        labelEn: 'Selling and connecting products with those who need them',
        value: 'sales',
        score: { dealMaker: 3 }
      }
    ]
  },

  {
    id: 'style_02',
    section: 'work_style',
    questionVi: 'Bạn thấy thoải mái hơn khi làm việc theo cách nào?',
    questionEn: 'Which working style makes you more comfortable?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Làm việc một-một, tập trung sâu',
        labelEn: 'One-on-one, deep focus',
        value: 'one_on_one',
        score: { expertAdvisor: 2, productizedSpecialist: 1 }
      },
      {
        labelVi: 'Tạo nội dung một lần, phục vụ nhiều người',
        labelEn: 'Create once, serve many',
        value: 'one_to_many',
        score: { contentEducator: 3, systemBuilder: 1 }
      },
      {
        labelVi: 'Tương tác với nhóm nhỏ',
        labelEn: 'Interacting with small groups',
        value: 'small_group',
        score: { communityConnector: 2, expertAdvisor: 1 }
      },
      {
        labelVi: 'Làm việc độc lập, giao sản phẩm',
        labelEn: 'Working independently, delivering products',
        value: 'independent',
        score: { systemBuilder: 2, productizedSpecialist: 2 }
      }
    ]
  },

  {
    id: 'style_03',
    section: 'work_style',
    questionVi: 'Bạn thích cách bán hàng nào hơn?',
    questionEn: 'Which sales approach do you prefer?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Bán trực tiếp, tư vấn cá nhân',
        labelEn: 'Direct sales, personal consulting',
        value: 'direct',
        score: { dealMaker: 3, expertAdvisor: 1 }
      },
      {
        labelVi: 'Để nội dung/thương hiệu hỗ trợ bán hàng',
        labelEn: 'Let content/brand support sales',
        value: 'content_driven',
        score: { contentEducator: 3, systemBuilder: 1 }
      },
      {
        labelVi: 'Bán qua cộng đồng và giới thiệu',
        labelEn: 'Sell through community and referrals',
        value: 'community_driven',
        score: { communityConnector: 3 }
      },
      {
        labelVi: 'Bán dịch vụ đóng gói rõ ràng',
        labelEn: 'Sell clearly packaged services',
        value: 'packaged',
        score: { productizedSpecialist: 3 }
      }
    ]
  },

  // RESOURCES SECTION
  {
    id: 'resource_01',
    section: 'resources',
    questionVi: 'Bạn có thể đầu tư bao nhiêu vốn ban đầu?',
    questionEn: 'How much initial capital can you invest?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Dưới 5 triệu',
        labelEn: 'Under 5 million VND',
        value: 'under_5m',
        score: { contentEducator: 1, productizedSpecialist: 2 }
      },
      {
        labelVi: '5-20 triệu',
        labelEn: '5-20 million VND',
        value: '5-20m',
        score: { productizedSpecialist: 1, systemBuilder: 1 }
      },
      {
        labelVi: '20-50 triệu',
        labelEn: '20-50 million VND',
        value: '20-50m',
        score: { systemBuilder: 2, communityConnector: 1 }
      },
      {
        labelVi: 'Hơn 50 triệu',
        labelEn: 'Over 50 million VND',
        value: 'over_50m',
        score: { systemBuilder: 1, dealMaker: 1 }
      }
    ]
  },

  {
    id: 'resource_02',
    section: 'resources',
    questionVi: 'Bạn có sẵn mạng lưới chuyên môn hoặc cộng đồng nào không?',
    questionEn: 'Do you have an existing professional network or community?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Có, mạng lưới rộng trong ngành',
        labelEn: 'Yes, wide network in the industry',
        value: 'wide_network',
        score: { communityConnector: 3, dealMaker: 2 }
      },
      {
        labelVi: 'Có, nhóm nhỏ đồng nghiệp',
        labelEn: 'Yes, small group of colleagues',
        value: 'small_network',
        score: { expertAdvisor: 1, communityConnector: 1 }
      },
      {
        labelVi: 'Chưa có, nhưng có thể xây dựng',
        labelEn: 'Not yet, but can build',
        value: 'can_build',
        score: { contentEducator: 2, systemBuilder: 1 }
      },
      {
        labelVi: 'Chưa có, muốn bắt đầu từ kỹ năng',
        labelEn: 'Not yet, want to start from skills',
        value: 'skill_first',
        score: { productizedSpecialist: 2, systemBuilder: 1 }
      }
    ]
  },

  {
    id: 'resource_03',
    section: 'resources',
    questionVi: 'Bạn có kênh social đang hoạt động không?',
    questionEn: 'Do you have active social media channels?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Có, đang đăng đều và có tương tác',
        labelEn: 'Yes, posting regularly with engagement',
        value: 'active',
        score: { contentEducator: 3, communityConnector: 2 }
      },
      {
        labelVi: 'Có tài khoản nhưng ít hoạt động',
        labelEn: 'Have accounts but rarely active',
        value: 'inactive',
        score: { contentEducator: 1 }
      },
      {
        labelVi: 'Chưa có, sẵn sàng xây dựng',
        labelEn: 'Not yet, ready to build',
        value: 'ready_to_build',
        score: { contentEducator: 1, productizedSpecialist: 1 }
      },
      {
        labelVi: 'Không cần, muốn bán trực tiếp',
        labelEn: 'Not needed, prefer direct sales',
        value: 'not_needed',
        score: { expertAdvisor: 2, dealMaker: 2 }
      }
    ]
  },

  // MOTIVATION SECTION
  {
    id: 'motivation_01',
    section: 'motivation',
    questionVi: 'Mục tiêu thu nhập của bạn trong 6 tháng đầu?',
    questionEn: 'Your income goal for the first 6 months?',
    type: 'single_choice',
    options: [
      {
        labelVi: '5-10 triệu/tháng',
        labelEn: '5-10 million VND/month',
        value: '5-10m',
        score: { productizedSpecialist: 2, contentEducator: 1 }
      },
      {
        labelVi: '10-20 triệu/tháng',
        labelEn: '10-20 million VND/month',
        value: '10-20m',
        score: { expertAdvisor: 2, productizedSpecialist: 1 }
      },
      {
        labelVi: '20-50 triệu/tháng',
        labelEn: '20-50 million VND/month',
        value: '20-50m',
        score: { expertAdvisor: 2, dealMaker: 1 }
      },
      {
        labelVi: 'Chưa quan trọng, muốn xây nền tảng trước',
        labelEn: 'Not important yet, want to build foundation first',
        value: 'foundation_first',
        score: { contentEducator: 2, communityConnector: 2, systemBuilder: 1 }
      }
    ]
  },

  {
    id: 'motivation_02',
    section: 'motivation',
    questionVi: 'Điều gì quan trọng nhất với bạn?',
    questionEn: 'What matters most to you?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Thu nhập nhanh',
        labelEn: 'Quick income',
        value: 'quick_income',
        score: { productizedSpecialist: 3, dealMaker: 2 }
      },
      {
        labelVi: 'Xây dựng thương hiệu cá nhân',
        labelEn: 'Building personal brand',
        value: 'personal_brand',
        score: { contentEducator: 3, expertAdvisor: 1 }
      },
      {
        labelVi: 'Tạo tài sản dài hạn',
        labelEn: 'Creating long-term assets',
        value: 'long_term_asset',
        score: { systemBuilder: 3, contentEducator: 2 }
      },
      {
        labelVi: 'Kết nối và giúp đỡ người khác',
        labelEn: 'Connecting and helping others',
        value: 'help_others',
        score: { communityConnector: 3, expertAdvisor: 1 }
      }
    ]
  },

  // BLOCKERS SECTION
  {
    id: 'blocker_01',
    section: 'blockers',
    questionVi: 'Điều gì khiến bạn chưa bắt đầu?',
    questionEn: 'What has stopped you from starting?',
    type: 'multiple_choice',
    maxSelections: 2,
    options: [
      {
        labelVi: 'Không biết mình giỏi gì',
        labelEn: 'Don\'t know my strengths',
        value: 'no_strength',
        score: {}
      },
      {
        labelVi: 'Không biết chọn mô hình nào',
        labelEn: 'Don\'t know which model to choose',
        value: 'no_model',
        score: {}
      },
      {
        labelVi: 'Sợ không bán được hàng',
        labelEn: 'Afraid of not being able to sell',
        value: 'fear_sales',
        score: { contentEducator: 1, systemBuilder: 1 }
      },
      {
        labelVi: 'Thiếu thời gian',
        labelEn: 'Lack of time',
        value: 'no_time',
        score: { productizedSpecialist: 1 }
      },
      {
        labelVi: 'Không biết bắt đầu từ đâu',
        labelEn: 'Don\'t know where to start',
        value: 'no_start',
        score: {}
      },
      {
        labelVi: 'Thiếu vốn',
        labelEn: 'Lack of capital',
        value: 'no_capital',
        score: { contentEducator: 1, productizedSpecialist: 1 }
      }
    ]
  },

  {
    id: 'blocker_02',
    section: 'blockers',
    questionVi: 'Bạn sợ nhất điều gì khi kinh doanh online?',
    questionEn: 'What do you fear most about online business?',
    type: 'single_choice',
    options: [
      {
        labelVi: 'Chọn sai hướng, mất thời gian',
        labelEn: 'Choosing wrong direction, wasting time',
        value: 'wrong_direction',
        score: {}
      },
      {
        labelVi: 'Không có khách hàng',
        labelEn: 'No customers',
        value: 'no_customers',
        score: { dealMaker: 1 }
      },
      {
        labelVi: 'Không đủ tốt so với người khác',
        labelEn: 'Not good enough compared to others',
        value: 'not_good_enough',
        score: { expertAdvisor: 1 }
      },
      {
        labelVi: 'Không duy trì được lâu dài',
        labelEn: 'Cannot sustain long-term',
        value: 'not_sustainable',
        score: { systemBuilder: 1, contentEducator: 1 }
      }
    ]
  }
];

export const getSectionQuestions = (section) => {
  return questions.filter(q => q.section === section);
};

export const getAllQuestions = () => questions;

export const getQuestionById = (id) => {
  return questions.find(q => q.id === id);
};
