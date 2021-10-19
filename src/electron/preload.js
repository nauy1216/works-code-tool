window.context = {
  versions: process.versions,
  cwd: process.cwd,
};
console.log('(window as any).context', window.context);
