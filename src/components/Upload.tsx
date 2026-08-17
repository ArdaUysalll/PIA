'use client'

import { useState } from 'react';
import * as filestack from 'filestack-js';

const client = filestack.init(process.env.NEXT_PUBLIC_FILESTACK_KEY!);

interface FilestackUploadProps {
  onUpload?: (imageUrl: string) => void;
}

export default function FilestackUpload({ onUpload }: FilestackUploadProps) {
  const [imageUrl, setImageUrl] = useState('');

const handleUpload = async () => {
    await client.picker({
      accept: ['image/*'],
      onUploadDone: (res) => {
        const rawUrl = res.filesUploaded[0].url;
        
        // Transform the Filestack URL to output WebP format automatically
        // Example: https://cdn.filestackcontent.com/output=format:webp/HANDLE_ID
        const urlParts = rawUrl.split('/');
        const handle = urlParts[urlParts.length - 1];
        const webpUrl = `https://cdn.filestackcontent.com/output=format:webp/${handle}`;

        setImageUrl(webpUrl);
        
        if (onUpload) {
          onUpload(webpUrl);
        }
      },
    }).open();
  };

  return (
    <div>
      <button 
        type="button" 
        onClick={handleUpload}
        className="w-full p-3 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-center"
      >
        {imageUrl ? 'Change Uploaded Image' : 'Upload Image with Filestack'}
      </button>

      <input type="hidden" name="image" value={imageUrl} />

      {imageUrl && (
       <img src={imageUrl} alt="Uploaded Image" />
      )}
    </div>
  );
}