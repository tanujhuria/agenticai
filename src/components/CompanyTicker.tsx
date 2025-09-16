import { motion } from 'motion/react';

const companies = [
  'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Salesforce', 
  'Adobe', 'Oracle', 'IBM', 'Intel', 'Tesla', 'Nvidia', 'PayPal', 'Shopify'
];

export function CompanyTicker() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-8 border-t border-purple-500">
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-8 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Duplicate the companies array for seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <span
              key={index}
              className="text-purple-100 text-lg font-medium flex-shrink-0"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}