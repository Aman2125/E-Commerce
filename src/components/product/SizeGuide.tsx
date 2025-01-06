import React from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideProps {
  onClose: () => void;
}

export const SizeGuide: React.FC<SizeGuideProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Ruler className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">Size Guide</h2>
            </div>
            <button onClick={onClose} className="text-text/70 hover:text-text">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6">Size</th>
                  <th className="py-4 px-6">Bust (cm)</th>
                  <th className="py-4 px-6">Waist (cm)</th>
                  <th className="py-4 px-6">Hips (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6">XS</td>
                  <td className="py-4 px-6">82-85</td>
                  <td className="py-4 px-6">63-66</td>
                  <td className="py-4 px-6">89-92</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">S</td>
                  <td className="py-4 px-6">86-89</td>
                  <td className="py-4 px-6">67-70</td>
                  <td className="py-4 px-6">93-96</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">M</td>
                  <td className="py-4 px-6">90-93</td>
                  <td className="py-4 px-6">71-74</td>
                  <td className="py-4 px-6">97-100</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">L</td>
                  <td className="py-4 px-6">94-97</td>
                  <td className="py-4 px-6">75-78</td>
                  <td className="py-4 px-6">101-104</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">XL</td>
                  <td className="py-4 px-6">98-101</td>
                  <td className="py-4 px-6">79-82</td>
                  <td className="py-4 px-6">105-108</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-text/70">
            <p>How to measure:</p>
            <ul className="list-disc ml-4 mt-2 space-y-1">
              <li>Bust: Measure around the fullest part of your bust</li>
              <li>Waist: Measure around your natural waistline</li>
              <li>Hips: Measure around the fullest part of your hips</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};