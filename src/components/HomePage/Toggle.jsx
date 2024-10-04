const priceData = {
  "5k": 99,
  "10k": 149,
  "25k": 199,
  "50k": 299,
  "100k": 499,
};

const currentPrice = priceData[accountSize];

<div className="text-3xl font-bold mb-4">${currentPrice}</div>;

{
  Object.keys(priceData).map((size) => (
    <Toggle
      key={size}
      pressed={accountSize === size}
      onPressedChange={() => setAccountSize(size)}
      className={`w-12 ${
        accountSize === size ? "bg-green-500" : "bg-gray-200"
      }`}
    >
      {size}
    </Toggle>
  ));
}

export default Toggle;
