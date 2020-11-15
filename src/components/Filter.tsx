import React from 'react';
import './Filter.scss';

interface Props {
  setBrand: (brand: string) => void;
}

const Filter: React.FC<Props> = ({ setBrand }) => {
  return (
    <div className="Filter">
      <div className="boxes">
        <input
          type="checkbox"
          id="box-1"
          onChange={(e) =>
            e.target.checked ? setBrand('samsung') : setBrand('all')
          }
        />
        <label htmlFor="box-1">Samsung</label>

        <input type="checkbox" id="box-2" />
        <label htmlFor="box-2">Huawei</label>

        <input type="checkbox" id="box-3" />
        <label htmlFor="box-3">iPhone</label>

        <input type="checkbox" id="box-4" />
        <label htmlFor="box-4">Xiaomi</label>
      </div>

      <div className="boxes">
        <input type="checkbox" id="box-5" />
        <label htmlFor="box-5">
          6000kn<i className="fas fa-plus"></i>
        </label>

        <input type="checkbox" id="box-6" />
        <label htmlFor="box-6">
          3000kn<i className="fas fa-arrows-alt-h"></i>6000kn
        </label>

        <input type="checkbox" id="box-7" />
        <label htmlFor="box-7">
          1500kn
          <i className="fas fa-arrows-alt-h"></i>3000kn
        </label>

        <input type="checkbox" id="box-8" />
        <label htmlFor="box-8">
          0kn<i className="fas fa-arrows-alt-h"></i>1500kn
        </label>
      </div>
    </div>
  );
};

export default Filter;
