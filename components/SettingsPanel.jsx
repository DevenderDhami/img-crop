export default function SettingsPanel({
  aspectRatio,
  setAspectRatio,
  width,
  setWidth,
  height,
  setHeight,
  unit,
  setUnit,
  brightness,
  setBrightness,
  contrast,
  setContrast,
  format,
  setFormat,
  handleCrop,
}) {
  return (
    <div className="settings flex flex-col w-full bg-blue-50 rounded-2xl p-4 md:w-2/5">
      {/* Aspect Ratio Selection */}
      <div className="mt-4">
        <label className="mr-2 font-semibold">Aspect Ratio:</label>
        <select
          className="border p-2 rounded"
          value={isNaN(aspectRatio) ? "NaN" : aspectRatio}
          onChange={(e) =>
            setAspectRatio(
              e.target.value === "NaN" ? NaN : parseFloat(e.target.value)
            )
          }
        >
          <option value="NaN">Free Crop</option>
          <option value="1">Square (1:1)</option>
          <option value="16/9">Wide (16:9)</option>
          <option value="4/3">Standard (4:3)</option>
        </select>
      </div>

      {/* Width & Height Inputs */}
      <div className="mt-4 flex space-x-4 flex-wrap">
        <div>
          <label className="block font-semibold">Width:</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
            className="border p-2 rounded w-24"
          />
        </div>
        <div>
          <label className="block font-semibold">Height:</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            className="border p-2 rounded w-24"
          />
        </div>
        <div>
          <label className="block font-semibold">Unit:</label>
          <select
            className="border p-2 rounded"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="px">Pixels (px)</option>
            <option value="cm">Centimeters (cm)</option>
          </select>
        </div>
      </div>

      {/* Brightness & Contrast Sliders */}
      <div className="mt-4">
        <label className="block font-semibold">Brightness:</label>
        <input
          type="range"
          min="50"
          max="150"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mt-2">
        <label className="block font-semibold">Contrast:</label>
        <input
          type="range"
          min="50"
          max="150"
          value={contrast}
          onChange={(e) => setContrast(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Format Selection */}
      <div className="mt-2">
        <label className="mr-2 font-semibold">Format:</label>
        <select
          className="border p-2 rounded"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPG</option>
          <option value="webp">WebP</option>
        </select>
      </div>

      <button
        onClick={handleCrop}
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-400 cursor-pointer"
      >
        Crop Image
      </button>
    </div>
  );
}
