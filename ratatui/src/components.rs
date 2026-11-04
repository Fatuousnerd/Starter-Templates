use ratatui::{
    buffer::Buffer,
    layout::Rect,
    style::{Color, Style},
    text::Line,
    widgets::Widget,
};

#[derive(Debug, Clone)]
struct Button<'a> {
    label: Line<'a>,
    theme: Theme,
    state: State,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum State {
    Normal,
    Selected,
    Active,
}

#[derive(Debug, Clone, Copy)]
struct Theme {
    text: Color,
    bg: Color,
    highlight: Color,
    shadow: Color,
}

const BLUE: Theme = Theme {
    text: Color::Rgb(16, 24, 48),
    bg: Color::Rgb(48, 72, 144),
    highlight: Color::Rgb(64, 96, 192),
    shadow: Color::Rgb(32, 48, 96),
};

impl<'a> Button<'a> {
    pub fn new<T: Into<Line<'a>>>(label: T) -> Self {
        Button {
            label: label.into(),
            theme: BLUE,
            state: State::Normal,
        }
    }

    pub const fn theme(mut self, theme: Theme) -> Self {
        self.theme = theme;
        self
    }

    pub const fn state(mut self, state: State) -> Self {
        self.state = state;
        self
    }
}

impl Widget for Button<'_> {
    #[expect(clippy::cast_possible_truncation)]
    fn render(self, area: Rect, buf: &mut Buffer) {
        let (bg, text, shadow, highlight) = self.colors();
        buf.set_style(area, Style::new().bg(bg).fg(text));

        if area.height > 2 {
            buf.set_string(
                area.x,
                area.y,
                "▔".repeat(area.width as usize),
                Style::new().fg(highlight).bg(bg),
            );
        }

        if area.height > 1 {
            buf.set_string(
                area.x,
                area.y + area.height - 1,
                "_".repeat(area.width as usize),
                Style::new().fg(shadow).bg(bg),
            );
        }

        buf.set_line(
            area.x + (area.width.saturating_sub(self.label.width() as u16)),
            area.y + (area.height.saturating_sub(1)) / 2,
            &self.label,
            area.width,
        );
    }
}

impl Button<'_> {
    const fn colors(&self) -> (Color, Color, Color, Color) {
        let theme = self.theme;
        match self.state {
            State::Normal => (theme.bg, theme.text, theme.shadow, theme.highlight),
            State::Selected => (theme.bg, theme.text, theme.shadow, theme.highlight),
            State::Active => (theme.bg, theme.text, theme.shadow, theme.highlight),
        }
    }
}
