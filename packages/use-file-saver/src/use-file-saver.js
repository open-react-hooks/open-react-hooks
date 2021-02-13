import { useCallback } from 'react';
import { saveAs } from 'file-saver';

const modeTypes = {
  BLOB: 'blob',
  FILE: 'file',
  TEXT: 'text',
  URL: 'url',
  CANVAS: 'canvas',
};

const types = {
  TEXT: 'text/plain;charset=utf-8',
  APPLICATION_OCTET_STREAM: 'application/octet-stream',
};

function useFileSaver() {
  const handleBlobSaveAs = useCallback(
    (file, { mode = modeTypes.BLOB, type, fileName = 'file' }) => {
      let fileSaveConfig = {
        file: null,
        name: null,
      };

      switch (mode) {
        case modeTypes.TEXT:
          fileSaveConfig = {
            file: new Blob([file], {
              type: type || types.TEXT,
            }),
            name: fileName,
          };
          break;

        case modeTypes.URL:
          fileSaveConfig = {
            file,
            name: fileName,
          };
          break;

        case modeTypes.FILE:
          fileSaveConfig = {
            file: new File([file], fileName, type || types.TEXT),
            name: fileName,
          };
          break;

        default:
          fileSaveConfig = {
            file: new Blob([file], {
              type: type || types.APPLICATION_OCTET_STREAM,
            }),
            name: fileName,
          };
          break;
      }

      return saveAs(fileSaveConfig.file, fileSaveConfig.name);
    },
    [],
  );

  return { setSaveAs: handleBlobSaveAs };
}

export default useFileSaver;
