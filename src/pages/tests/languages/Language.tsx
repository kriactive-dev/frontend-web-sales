import { useTranslation } from 'react-i18next';

const Language = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: 'en' | 'pt') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
    </div>
  );
};

export default Language;
