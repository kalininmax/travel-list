/* eslint-disable react/prop-types */
const Stats = ({ list }) => {
  if (!list.length) {
    return (
      <footer className="stats">
        <i>Start adding some items to your packing list 🚀</i>
      </footer>
    );
  }

  const itemsQty = list.length;
  const packedItemsQty = list.filter((item) => item.packed).length;
  const percentage = Math.round((packedItemsQty / itemsQty) * 100);
  return (
    <footer className="stats">
      <i>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `🎒 You have ${itemsQty} items on your list, and you already packed ${packedItemsQty} (${percentage}%)`}
      </i>
    </footer>
  );
};

export default Stats;
