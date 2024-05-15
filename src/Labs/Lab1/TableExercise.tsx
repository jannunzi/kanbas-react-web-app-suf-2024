export default function TableExercise() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        {/* table, border, width */}
        <thead>
          {/* table headings */}
          <tr>
            {/* table row */}
            <th>Quiz</th> {/* table heading*/}
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* table body */}
          <tr>
            {/* table row */}
            <td>Q1</td> {/* table data / cell */}
            <td>HTML</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q2</td> {/* table data / cell */}
            <td>CSS</td>
            <td>3/3/21</td>
            <td>90</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q3</td> {/* table data / cell */}
            <td>JavaScript</td>
            <td>4/3/21</td>
            <td>95</td>
          </tr>
        </tbody>
        <tfoot>
          {/* table row */}
          <tr>
            <td colSpan={3}>Average</td> {/* column span */}
            <td>90</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
