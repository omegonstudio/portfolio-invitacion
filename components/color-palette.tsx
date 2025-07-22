interface ColorPaletteProps {
  colors: Array<{ name: string; color: string }>
}

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
      {colors.map((color, index) => (
        <div key={index} className="text-center">
          <div
            className="w-16 h-16 mx-auto rounded-lg border-2 border-stone-300 mb-2"
            style={{ backgroundColor: color.color }}
          ></div>
          <p className="text-xs text-stone-600">{color.name}</p>
        </div>
      ))}
    </div>
  )
}
