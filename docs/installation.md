# Installation

Install the `design` runtime pack from the independently versioned
`gabros20/design-skill` repository.

## Prerequisites

- An Agent Skills-compatible client (Codex, Claude Code, or any cross-agent host).
- No external CLI is required to route, research, structure, or specify a design.
- Critique and art review of a *rendered* build require a runnable page, screenshot capability, and
  a model that can inspect images. Without rendered evidence, the skill labels its review
  "code-level pass, not an art review" rather than signing off on appearance.

## Install with skills.sh

```bash
npx skills add gabros20/design-skill
```

## Clone and install

```bash
git clone https://github.com/gabros20/design-skill.git
cd design-skill
./install.sh codex
```

Available targets:

| Argument | Destination |
|---|---|
| `codex` | `${CODEX_HOME:-$HOME/.codex}/skills/design/` |
| `agents` | `~/.agents/skills/design/` |
| `claude` | `~/.claude/skills/design/` |
| `cursor` | `~/.cursor/skills/design/` |
| `antigravity` | Gemini IDE and Antigravity CLI skill paths |
| `opencode` | `~/.config/opencode/skills/design/` |
| `grok` | `~/.grok/skills/design/` |
| `hermes` | `~/.hermes/skills/design/` |
| `all` | Claude, Codex, and the cross-agent path |

The installer stages a complete copy before replacing an existing installation. If replacement
fails, it restores the previous copy.

## Verify

Start a new client session and use the client's supported invocation form:

- Codex: `$design`
- Slash-command clients: `/design`
- Other clients: an `@` mention, skill tool, or natural-language trigger

For Codex, verify the installed files directly:

```bash
test -f "${CODEX_HOME:-$HOME/.codex}/skills/design/SKILL.md"
```

Then run a small route-specific request, for example:

```text
Use $design to map the checkout flow for this store, every edge and empty state.
```

## Update

```bash
cd design-skill
git pull --ff-only
./install.sh codex
```

Review [CHANGELOG.md](../CHANGELOG.md) and GitHub Releases for version history. Version metadata
intentionally stays outside runtime `SKILL.md`.

## Uninstall

```bash
rm -rf "${CODEX_HOME:-$HOME/.codex}/skills/design"
```
