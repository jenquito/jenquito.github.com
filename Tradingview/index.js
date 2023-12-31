new TradingView.widget(
    {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "240",
        "timezzone": "Etc/Utc",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "watchlist": [
            "NYSE:ABT",
            "NASDAQ:AAPL",
            "NASDAQ:TSLA",
            "NASDAQ:MSFT",
            "AMEX:SPY",
            "NASDAQ:NVDA",
        ],
        "details": true,
        "hotlist": true,
        "calendar": true,
        "studies": [
            "STD;SMA"
        ],
        "container_id": "chart",
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650",
    }
)