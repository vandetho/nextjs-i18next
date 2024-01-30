import React from 'react';
import { Stack, Toolbar } from '@mui/material';
import AppBar from '@/tembre/app/[locale]/AppBar';
import Footer from '@/tembre/app/[locale]/Footer';
import TranslationsProvider from '@/tembre/app/[locale]/TranslationsProvider';
import initTranslations from '@/tembre/app/i18n';

const i18nNamespaces = ['common', 'glossary', 'validation'];

export default async function Layout({ children, params: { locale } }: any) {
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
            <AppBar />
            <Stack maxWidth="xl" m="auto" py={4} px={2}>
                <Toolbar />
                {children}
            </Stack>
            <Footer />
        </TranslationsProvider>
    );
}
