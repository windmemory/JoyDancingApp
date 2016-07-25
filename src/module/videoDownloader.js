import fs from 'react-native-fs';

export const downloadSingleVideo = (video, progressCallback) => {
  const courseName = video.name.split('-')[0];
  const folderPath = `${fs.DocumentDirectoryPath}/${courseName}`;
  return fs.exists(folderPath)
  .then((exist) => {
    if (!exist) return fs.mkdir(folderPath, false);
  }).then(() => {
    return fs.downloadFile({
      fromUrl: video.highLink,
      toFile: `${folderPath}/${video.name}`,
      progressDivider: 10,
      progress: progressCallback,
    });
  }).then((result) => ({
    
  }))
}
