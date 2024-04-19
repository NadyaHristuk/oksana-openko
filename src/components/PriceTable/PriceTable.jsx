import { StyledTable } from './PriceTable.styled';

export default function PriceTable({ name }) {
  return (
    <StyledTable name={name}>
      <thead>
        <tr className="first-row">
          <td className="first-cell"></td>
          <td className="second-cell">
            {name.speaker ? 'За домовленістю' : 'Індивідуальна'}
          </td>
          <td className="third-cell">Для пари</td>
        </tr>
      </thead>
      <tbody>
        <tr className="second-row">
          <td className="first-cell">{name.cards ? '' : 'Офлайн'}</td>
          <td className="second-cell">1300 грн.</td>
          <td className="third-cell">1800 грн.</td>
        </tr>
        <tr className="third-row">
          <td className="first-cell">{name.cards ? '' : 'Онлайн'}</td>
          <td className="second-cell">1000 грн.</td>
          <td className="third-cell">
            {name.cards ? '1350 грн.' : '1500 грн.'}
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
}
