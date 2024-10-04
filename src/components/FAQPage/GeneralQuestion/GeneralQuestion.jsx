import React from "react";
// import GeneralQnsList from "GeneralQnsList.js";
import GeneralQnsList from "./GenerealQnsList.jsx";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "../Card.jsx";
import { Link } from "react-router-dom";
import HelpCenter from "../HelpCenter.jsx";

export default function GeneralQuestion() {
  return (
    <>
      <HelpCenter />
      <div className="max-w-2xl mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">General rules</h1>
          <p className="text-gray-600">
            No matter what type of account you have, whether it's a challenge or
            a funded account, it's important to have a clear understanding of
            these general rules and how they operate.
          </p>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          {GeneralQnsList.length} articles
        </p>

        {GeneralQnsList.map((item, id) => (
          <Card
            key={item.id}
            className="mb-2 hover:bg-gray-50 transition-colors duration-200"
          >
            <CardContent className="p-4">
              <Link
                to={`/faq/general-rules/${item.routerLink}`}
                className="flex justify-between items-center"
              >
                <span className="text-blue-600">{item.question}</span>
                <ChevronRight className="text-gray-400" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
