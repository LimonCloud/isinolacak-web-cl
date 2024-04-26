export type SettingsStore = {
    setReady: () => void;
    ready: boolean;
};

export type useIOCoreSettingsReturnType = {
    setReady: () => void;
    ready: boolean;
};

const settingsStore: SettingsStore = {
    ready: false,
    setReady: () => {
    }
};
export default settingsStore;
