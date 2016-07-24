export const generateVideoName = (condensedName) => {
  const arr = condensedName.split('-');
  const name = arr[0].replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
  const part = arr[1] === 'full' ? '完整版' : `Part ${arr[1].slice(-1)}`;
  const type = arr[2] === 'mir' ? '镜面教学' : '正面教学';
  return `${name} ${type} ${part}`;
}
