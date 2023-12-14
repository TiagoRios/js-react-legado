import theme from '../themes';

export default function escolherTema(tema) {
  if (tema === theme.dark) {
    return 'Dark';
  } else if (tema === theme.colorido) {
    return 'Colorido';
  } else {
    return 'Light';
  }
}
