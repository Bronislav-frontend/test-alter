import { useTranslation } from 'react-i18next';
import {
  List,
  ListItem,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import Logo from 'components/Logo/Logo';

import { LANGAGUES } from 'constants/langagues';

const styles = {
  container: {
    display: 'flex',
  },
  mobContainer: {
    flexDirection: 'column' as 'column',
  },

  list: {
    display: 'flex',
    padding: '0px',
  },
  mobList: {
    flexDirection: 'column' as 'column',
  },

  item: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px',
  },
  button: {
    color: 'white',
  },
  selectedLang: {
    color: 'blue',
    backgroundColor: 'white',
  },
};

const LangaguesBar = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={[styles.container, matches && styles.mobContainer]}>
      <Logo />
      <List sx={[styles.list, matches && styles.mobList]}>
        {LANGAGUES.map(langague => (
          <ListItem key={langague} sx={styles.item}>
            <Button
              id={
                i18n.resolvedLanguage === langague ? 'selectedLang' : 'langId'
              }
              aria-label={`Set ${langague} language`}
              onClick={() => i18n.changeLanguage(langague)}
              sx={[
                styles.button,
                i18n.resolvedLanguage === langague && styles.selectedLang,
              ]}
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
