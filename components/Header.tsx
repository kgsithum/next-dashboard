import InputDate from './input/date/InputDate';

export interface IHeader {
  fromDate: string;
  toDate: string;
  selectFromDate: (date: Date) => void;
  selectToDate: (date: Date) => void;
}

const Header: React.FC<IHeader> = ({
  fromDate,
  toDate,
  selectFromDate,
  selectToDate,
}) => {
  return (
    <header className="p-10">
      <div className="flex flex-col sm:flex-row p-2 gap-14">
        <div className="font-medium text-gray-900 text-lg">
          Economic Dashboard
        </div>
        <div className="flex-1 inline-flex gap-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            From
          </label>
          <InputDate
            name="from-date"
            defaultDate={new Date(fromDate)}
            onChange={selectFromDate}
          />
        </div>
        <div className="flex-1 inline-flex gap-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            To
          </label>
          <InputDate
            name="to-date"
            defaultDate={new Date(toDate)}
            onChange={selectToDate}
          />
        </div>
        <div className="flex-1 inline-flex gap-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Scale
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
