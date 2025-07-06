import React from "react";

type Props = {
  onSelect: (id: number) => void;
  category: number;
};

const categories = [
  { id: 0, name: "Any Category" },
  { id: 9, name: "General Knowledge" },
  { id: 10, name: "Entertainment: Books" },
  { id: 11, name: "Entertainment: Film" },
  { id: 12, name: "Entertainment: Music" },
  { id: 18, name: "Science: Computers" },
  { id: 19, name: "Science: Mathematics" },
  { id: 20, name: "Mythology" },
  { id: 21, name: "Sports" },
  { id: 23, name: "History" },
];

export const QuestionCategoryComponent = ({ onSelect, category }: Props) => (
  <div>
    <h2 className="categoryText">Select Category</h2>
    {categories.map((cat) => (
      <button
      className={category === cat.id ? "categoryBtn selected" : "categoryBtn"}
        key={cat.id}
        onClick={() => onSelect(cat.id)}
      >
        {cat.name}
      </button>
    ))}
  </div>
);
