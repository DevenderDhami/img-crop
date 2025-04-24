import useGlobalStore from '@/store/globalStore'

const LoaderOverlay = () => {
  const loading = useGlobalStore((state) => state.loading)

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] flex items-center justify-center">
      <div className="border-4 border-white border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
    </div>
  )
}

export default LoaderOverlay
