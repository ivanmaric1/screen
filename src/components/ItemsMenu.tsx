import './ItemsMenu.scss';
import React from 'react';

interface Props {
  setPageToRender: (page: string) => void;
}

const ItemsMenu: React.FC<Props> = ({ setPageToRender }) => {
  return (
    <div className="ItemsMenu">
      <ul className="ItemsMenu-list">
        <li>
          <a onClick={() => setPageToRender('phones')}>Mobiteli</a>
        </li>
        <li>
          <a onClick={() => setPageToRender('tablets')}>Tableti</a>
        </li>
        <li>
          <a onClick={() => setPageToRender('watches')}>Pametni satovi</a>
        </li>
        <li>
          <a onClick={() => setPageToRender('additional')}>Oprema</a>
        </li>
        <li>
          <a onClick={() => setPageToRender('sale')}>Akcija</a>
        </li>
      </ul>
    </div>
  );
};

export default ItemsMenu;
