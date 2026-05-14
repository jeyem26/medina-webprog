import art1 from '../assets/images/art1.jpg'
import art2 from '../assets/images/art2.jpg'
import art3 from '../assets/images/art3.jpg'
import art4 from '../assets/images/art4.jpg'

const articleContent = [
  {
    id: 'espresso-basics',
    tag: 'Brew Guide',
    title: 'Brew While You Code: Espresso Basics',
    description:
      'Perfect espresso for focus sessions. Quick extraction for debugging breaks without losing momentum.',
    imageSrc: art1,
    imageAlt: 'Coffee article',
    sections: [
      {
        type: 'h3',
        text: 'Dial-in for momentum'
      },
      {
        type: 'p',
        text: 'Use small adjustments—grind, dose, and time—then test quickly. Like unit tests, small feedback loops beat big rewrites.'
      },
      {
        type: 'h3',
        text: 'What you should taste'
      },
      {
        type: 'p',
        text: 'Look for sweetness first, then clarity. If it tastes harsh, slow down the extraction. If it’s watery, tighten the window.'
      }
    ]
  },
  {
    id: 'yirgacheffe-notes',
    tag: 'Origin Story',
    title: 'Ethiopian Yirgacheffe Tasting Notes',
    description:
      'Floral jasmine, bright citrus, silky mouthfeel. Perfect for morning standups and pair programming.',
    imageSrc: art2,
    imageAlt: 'Coffee article',
    sections: [
      {
        type: 'h3',
        text: 'Floral first impressions'
      },
      {
        type: 'p',
        text: 'Yirgacheffe often opens with aromatics—jasmine and light florals. Let the cup rest 30 seconds to bloom.'
      },
      {
        type: 'h3',
        text: 'Citrus clarity'
      },
      {
        type: 'p',
        text: 'Brew slightly hotter or with a touch finer grind to bring out citrus brightness without turning it sour.'
      }
    ]
  },
  {
    id: 'v60-code-reviews',
    tag: 'Brew Guide',
    title: 'V60 for Code Reviews',
    description:
      'Mindful pour-over timing matches thoughtful code review pace. Clarity in every cup and commit.',
    imageSrc: art3,
    imageAlt: 'Coffee article',
    sections: [
      {
        type: 'h3',
        text: 'Pour like you review'
      },
      {
        type: 'p',
        text: 'Start with an even bloom, then pour in controlled circles. You’re aiming for stability—like incremental changes.'
      },
      {
        type: 'h3',
        text: 'Finish with consistency'
      },
      {
        type: 'p',
        text: 'Keep your timing and ratio consistent. Small variations are like formatting diffs: they add noise to signal.'
      }
    ]
  },
  {
    id: 'coffee-code-pairings',
    tag: 'Coding Pairings',
    title: 'Coffee & Code Pairings',
    description:
      'Espresso + React debugging, Latte + API design, Pour-over + Architecture discussions.',
    imageSrc: art4,
    imageAlt: 'Coffee article',
    sections: [
      {
        type: 'h3',
        text: 'Match the cup to the task'
      },
      {
        type: 'p',
        text: 'Choose espresso for quick focus loops. Choose a smoother brew for longer design thinking. Let taste guide your schedule.'
      },
      {
        type: 'h3',
        text: 'Pair programming, paired aromas'
      },
      {
        type: 'p',
        text: 'When two minds collaborate, shared rituals help. Brew something you both like, then iterate together.'
      }
    ]
  }
]

export default articleContent;

