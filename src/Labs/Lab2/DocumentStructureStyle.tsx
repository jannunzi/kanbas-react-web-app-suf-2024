export default function DocumentStructureStyle() {
  return (
    <div id="wd-css-document-structure">
      <div className="wd-selector-1">
        <h3>Document structure selectors</h3>
        <div className="wd-selector-2">
          Selectors can be combined to refer elements in particular places in
          the document
          <p className="wd-selector-3">
            This paragraph's red background is referenced as
            <br />
            .selector-2 .selector3
            <br />
            meaning the descendant of some ancestor.
            <br />
            <span className="wd-selector-4">
              Whereas this span is a direct child of its parent
            </span>
            <br />
            You can combine these relationships to create specific styles
            depending on the document structure
          </p>
        </div>
      </div>
    </div>
  );
}
