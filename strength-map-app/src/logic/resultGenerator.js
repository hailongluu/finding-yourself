// Result generator - combines all scoring logic to create final result
import {
  calculateArchetypeScores,
  getPrimaryAndSecondaryArchetypes,
  calculateCapabilityScores,
  identifyTopStrengths,
  identifyAvailableAssets,
  identifyMainBlocker,
  generateRecommendedDirections
} from './scoring.js';

export const generateResult = (answers) => {
  // Calculate archetype scores
  const archetypeScores = calculateArchetypeScores(answers);

  // Get primary and secondary archetypes
  const { primary, primaryScore, secondary, secondaryScore } =
    getPrimaryAndSecondaryArchetypes(archetypeScores);

  // Calculate capability scores
  const capabilityScores = calculateCapabilityScores(answers, archetypeScores);

  // Identify top strengths
  const topStrengths = identifyTopStrengths(capabilityScores, archetypeScores);

  // Identify available assets
  const availableAssets = identifyAvailableAssets(answers);

  // Identify main blocker
  const mainBlocker = identifyMainBlocker(answers, primary);

  // Generate recommended directions
  const recommendedDirections = generateRecommendedDirections(
    primary,
    secondary,
    capabilityScores
  );

  // Build final result object
  const result = {
    primaryArchetype: primary,
    primaryScore,
    secondaryArchetype: secondary,
    secondaryScore,
    topStrengths,
    capabilityScores,
    availableAssets,
    mainBlocker,
    recommendedDirections,
    nextStep: 'roadmap_30_days',
    timestamp: new Date().toISOString()
  };

  return result;
};

export const getArchetypeDescription = (archetypeId, language = 'vi') => {
  // This will be used by components to display archetype info
  // Import from archetypes.js when needed
  return archetypeId;
};
