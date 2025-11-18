import { motion } from "framer-motion";

export default function ProgressBar({ percent }: { percent: number }) {
  const safe = Math.max(0, Math.min(100, percent));
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${safe}%` }} className="h-3 bg-rose-500" />
      </div>
      <div className="text-xs text-gray-600 mt-2">You've visited <strong>{safe}%</strong> of the world (approx)</div>
    </div>
  );
}
