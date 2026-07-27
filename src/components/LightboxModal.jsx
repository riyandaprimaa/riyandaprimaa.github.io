import { X } from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({ isOpen, image, onClose }) {
  if (!isOpen || !image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        <img src={image.src} alt={image.alt || 'Full size view'} className="lightbox-img" />
        {image.caption && <p className="lightbox-caption">{image.caption}</p>}
      </div>
    </div>
  );
}
