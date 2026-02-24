import { create } from 'zustand';

type Page = 
  | 'login' 
  | 'dashboard' 
  | 'competitors'
  | 'listing'
  | 'resources'
  | 'settings';

type ProjectDetailTab = 'info' | 'competitors' | 'selling-points' | 'listing' | 'image-briefs' | 'report';

interface AppState {
  currentPage: Page;
  currentStep: number;
  isAnalyzing: boolean;
  analysisProgress: number;
  currentProject: any;
  projectDetailTab: ProjectDetailTab;
  setPage: (page: Page) => void;
  setStep: (step: number) => void;
  startAnalysis: () => void;
  setCurrentProject: (project: any) => void;
  setProjectDetailTab: (tab: ProjectDetailTab) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 'login',
  currentStep: 1,
  isAnalyzing: false,
  analysisProgress: 0,
  currentProject: null,
  projectDetailTab: 'info',
  
  setPage: (page) => set({ currentPage: page }),
  setStep: (step) => set({ currentStep: step }),
  setCurrentProject: (project) => set({ currentProject: project }),
  setProjectDetailTab: (tab) => set({ projectDetailTab: tab }),
  
  startAnalysis: () => {
    set({ isAnalyzing: true, analysisProgress: 0, currentPage: 'competitors' });
    
    const interval = setInterval(() => {
      set((state) => {
        const newProgress = state.analysisProgress + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          return {
            analysisProgress: 100,
            isAnalyzing: false,
            currentPage: 'competitors',
            projectDetailTab: 'selling-points',
          };
        }
        return { analysisProgress: newProgress };
      });
    }, 150);
  },
}));
