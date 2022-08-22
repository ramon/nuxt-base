export interface UIStateInterface {
}

export const useUIState = useState<UIStateInterface>('uiState', () => ({}))
