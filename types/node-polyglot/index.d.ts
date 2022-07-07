// Type definitions for node-polyglot v2.4.0
// Project: https://github.com/airbnb/polyglot.js
// Definitions by: Tim Jackson-Kiely <https://github.com/timjk>
//                 Liam Ross <https://github.com/liamross>
//                 Michael Mok <https://github.com/pmmmwh>
//                 Hannes Diercks <https://github.com/Xiphe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Polyglot {
    type InterpolationOptions<InterpolationValue = any> = {
        smart_count?: number | { length: number } | undefined;
        _?: string | undefined;
    } & {
        [interpolationKey: string]: InterpolationValue;
    }

    interface InterpolationTokenOptions {
        prefix?: string | undefined;
        suffix?: string | undefined;
    }

    interface PluralRules {
        pluralTypes: {[lang: string]: (n: number) => number};
        pluralTypeToLanguages: {[lang: string]: string[]};
    }

    interface PolyglotOptions<InterpolationValue = any, ReplaceResult = string> {
        phrases?: any;
        locale?: string | undefined;
        allowMissing?: boolean | undefined;
        onMissingKey?: ((key: string, options: Polyglot.InterpolationOptions<InterpolationValue>, locale: string) => string) | undefined;
        warn?: ((message: string) => void) | undefined;
        interpolation?: InterpolationTokenOptions | undefined;
        pluralRules?: PluralRules | undefined;
        replace?: (this: string, interpolationRegex: RegExp, replacer: (wholeMatch: string, param: string) => InterpolationValue) => ReplaceResult;
    }

    function transformPhrase(phrase: string, options?: number | Polyglot.InterpolationOptions, locale?: string): string;
}

declare class Polyglot<InterpolationValue = any, ReplaceResult = string> {
    constructor(options?: Polyglot.PolyglotOptions<InterpolationValue, ReplaceResult>);

    extend(phrases: any, prefix?: string): void;

    t(phrase: string, options?: number | Polyglot.InterpolationOptions<InterpolationValue>): ReplaceResult;

    clear(): void;

    replace(phrases: any): void;

    locale(locale?: string): string;

    has(phrase: string): boolean;

    unset(phrases: any, prefix?: string): void;
}

export = Polyglot;
