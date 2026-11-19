/* The whoami code window: the "terminal" half of the identity.
   Shown once, in About → Elsewhere. */

type Tok = [cls: 'k' | 's' | 'v' | 'c' | 'p', text: string] | string;

const LINES: Tok[][] = [
  [['k', 'class'], ' ', ['v', 'Engineer'], ':'],
  ['    ', ['v', 'name'], '     = ', ['s', '"Van-Loc Nguyen"']],
  ['    ', ['v', 'based'], '    = ', ['s', '"Ho Chi Minh / Tokyo"']],
  ['    ', ['v', 'focus'], '    = [', ['s', '"vision"'], ', ', ['s', '"deep-learning"'], ', ', ['s', '"agents"'], ']'],
  ['    ', ['v', 'stack'], '    = {', ['s', '"py"'], ', ', ['s', '"torch"'], ', ', ['s', '"django"'], ', ', ['s', '"docker"'], '}'],
  ['    ', ['v', 'curious'], '  = ', ['k', 'True']],
  ['    ', ['v', 'shipping'], ' = ', ['k', 'True']],
  ['    ', ['c', '# speaks vi · en · 中文 (a little)']],
  ['    ', ['k', 'def'], ' ', ['v', 'hireable'], '(', ['v', 'self'], '):'],
  ['        ', ['k', 'return'], ' ', ['v', 'curious'], ' ', ['k', 'and'], ' ', ['v', 'shipping']],
];

export default function Console() {
  return (
    <div className="vl-console" aria-label="Self-description as a Python class">
      <div className="vl-console__head">
        <span className="vl-console__dots" aria-hidden="true">
          <i />
          <i />
          <i className="on" />
        </span>
        <span>~ / whoami.py</span>
        <span>utf-8</span>
      </div>
      <div className="vl-console__body">
        {LINES.map((line, i) => (
          <div key={i}>
            <span className="n">{i + 1}</span>
            {line.map((tok, j) =>
              typeof tok === 'string' ? (
                tok
              ) : (
                <span key={j} className={tok[0]}>
                  {tok[1]}
                </span>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
