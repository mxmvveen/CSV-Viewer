import React from 'react';
import "./Viewer.scss";

import arrowDownIcon from "../assets/arrow-down.png";
import { FileContext } from '../providers/FileProvider';
import { isNumber } from '../utils/utils';

const Viewer: React.FC = () => {
  const { content, title } = React.useContext(FileContext);

  const [sortColumnIndex, setSortColumnIndex] = React.useState<number>(0);
  const [isReversed, setIsReversed] = React.useState<boolean>(false);

  const [header, ...body] = content;

  const sortedBody: string[][] = React.useMemo(() => {
    const sortedList: string[][] = [...body].sort((a, b) => {
      return a[sortColumnIndex].localeCompare(
        b[sortColumnIndex],
        undefined,
        { numeric: isNumber(a[sortColumnIndex]) }
      );
    });

    if (isReversed) {
      return sortedList.reverse();
    }
    return sortedList;
  }, [body, sortColumnIndex, isReversed]);

  const setSortValues = (index: number): void => {
    if (index === sortColumnIndex) {
      setIsReversed(!isReversed)
      return;
    }

    setSortColumnIndex(index);
    setIsReversed(false)
  }

  if (content.length === 0) {
    return null;
  }

  const arrow: JSX.Element = <img src={arrowDownIcon} alt="arrow" className={isReversed ? "reversed" : ""} />;
  return (
    <div className="viewer">
      {title !== null &&
        <div className="filename">
          {title}
        </div>
      }
      <table>
        <thead>
          <tr>
            {header.map((cell: string, index: number) =>
              <th key={`${cell}${index}`} onClick={() => setSortValues(index)}>
                {cell}
                {sortColumnIndex === index && arrow}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedBody.map((row: string[], index: number) =>
            <tr key={index}>
              {row.map((cell: string, index: number) =>
                <td key={index}>
                  {cell}
                </td>
              )}
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Viewer;