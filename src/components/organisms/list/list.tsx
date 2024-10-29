import { useTranslations } from "next-intl";
import React from "react";
import "./list.scss";

const List = ({ items }: { items: string[] }) => {
  const t = useTranslations();
  const renderItems = (item: string) => (
    <div key={t(item)} className="list__item">
      <div className="list__item__dot" />
      <p className="list__item__label">{t(item)}</p>
    </div>
  );
  return <div className="list">{items.map(renderItems)}</div>;
};

export default List;
