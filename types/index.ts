import Vue from 'vue';

export interface Contact {
    email?: string,
    phone?: string,
}
export interface Auth<T = any> {
    ctx: any;
    $state: any;
    $toast: any;
    $FlutterwaveCheckout: any;
    $cloudinary: any;
    $axios: any;
    $gsap: any;
    $window: any;
    $refs: any;
    $content: any;
    $storage: Storage;
    user: Partial<T>;
    loggedIn: boolean;
    loginWith(strategyName: string, ...args: any): Promise<never>;
    login(...args: any): Promise<never>;
    logout(): Promise<never>;
    fetchUser(): Promise<never>;
    fetchUserOnce(): Promise<never>;
    hasScope(scopeName: string): boolean;
    setToken(strategyName: string, token?: string): string;
    getToken(strategyName: string): string;
    syncToken(strategyName: string): string;
    onError(handler: (error: Error, name: string, endpoint: any) => void): any;
    setUser(user?: Partial<T>): any;
    reset(): Promise<never>;
    redirect(name: string): any;
}

declare module 'vue/types/vue' {
    interface Vue {
        $axios: any;
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $window: any;
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $content: any;
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $gsap: any;
    }
}
