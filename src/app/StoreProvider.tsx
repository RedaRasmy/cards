"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import makeStore, { AppStore, makeStoreWithPersist} from "./features/game/Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { FEATURE_FLAGS } from "./FeatureFlags";

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const isPersistEnabled = FEATURE_FLAGS.persisting

    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = isPersistEnabled ? makeStoreWithPersist() :  makeStore();
    }
    const persistor = isPersistEnabled ? persistStore(storeRef.current) : undefined

    return (
        <Provider store={storeRef.current}>
            {
                persistor ?
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
                : <>{children}</>
            }
        </Provider>
    );
}
