import { Pathnames, LocalePrefix } from "next-intl/routing";

export const locales = ["en", "th"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
    '/': '/',
    '/service': '/service',
};

export const localePrefix: LocalePrefix<Locales> = 'always';