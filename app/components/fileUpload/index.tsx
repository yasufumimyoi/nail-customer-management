import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone-esm";
import { Upload } from "lucide-react";

interface UploadedFile {
  file: File;
  preview: string;
}

export const FileUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreview = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpeg", ".jpg"] },
    maxFiles: 5,
  });

  return (
    <div>
      {uploadedFiles.length > 0 && (
        <ul className="mt-2 mb-4 grid grid-cols-2 gap-2">
          {uploadedFiles.map((fileData, index) => (
            <li key={index}>
              <img
                src={fileData.preview}
                alt={fileData.file.name}
                className="rounded-lg"
              />
            </li>
          ))}
        </ul>
      )}
      <div className="p-4 border border-dashed border-gray-300 rounded-lg">
        <div {...getRootProps()} className="text-center p-4">
          <input {...getInputProps()} />
          <div className="flex items-center">
            <div className="text-sm">クリックして画像をアップロード</div>
            <Upload className="h-5 w-5 text-gray-500 ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
