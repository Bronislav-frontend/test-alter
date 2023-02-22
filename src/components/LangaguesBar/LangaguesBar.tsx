import { useTranslation } from 'react-i18next';
import { List, ListItem, Button, Box } from '@mui/material';

import Logo from 'components/Logo/Logo';

import { LANGAGUES } from 'constants/langagues';

const LangaguesBar = () => {
  const langagues = LANGAGUES;
  const { i18n } = useTranslation();

  return (
    <Box sx={{ display: 'flex' }}>
      <Logo />
      <List sx={{ display: 'flex', padding: '0px' }}>
        {langagues.map(langague => (
          <ListItem key={langague} sx={{ padding: '0px' }}>
            <Button
              id={
                i18n.resolvedLanguage === langague ? 'selectedLang' : 'langId'
              }
              aria-label={`Set ${langague} language`}
              onClick={() => i18n.changeLanguage(langague)}
              sx={{ color: 'white' }}
            >
              {langague}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LangaguesBar;
