import React, { useMemo, useRef, useState } from "react";
import logo from "../assets/Mare.png";

const FONT_SIZES = {
  Pequeno: 14,
  Médio: 16,
  Grande: 20,
} as const;

const FONT_ORDER = ["Pequeno", "Médio", "Grande"] as const;

type FontKey = (typeof FONT_ORDER)[number];
type ColorMode = "padrao" | "alto-contraste" | "daltonismo";
type PainelContas = "seguidores" | "seguindo" | null;

const COLOR_MODES: { id: ColorMode; label: string }[] = [
  { id: "padrao", label: "Padrão" },
  { id: "alto-contraste", label: "Alto Contraste" },
  { id: "daltonismo", label: "Daltonismo" },
];

const SEGUIDORES_MOCK = [
  "Ana Beatriz",
  "Carlos Eduardo",
  "Mariana Souza",
  "Pedro Henrique",
  "Fernanda Lima",
  "Rafael Costa",
  "Juliana Alves",
  "Bruno Martins",
  "Camila Rocha",
  "Lucas Ferreira",
];

const SEGUINDO_MOCK = [
  "Otávio Ramos",
  "Beatriz Nunes",
  "Diego Santos",
  "Larissa Pinto",
  "Gustavo Melo",
  "Isabela Duarte",
  "Thiago Barbosa",
  "Renata Cardoso",
];

type Theme = {
  pageBg: string;
  panelBg: string;
  cardBg: string;
  border: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentText: string;
};

const THEMES: Record<ColorMode, { dark: Theme; light: Theme }> = {
  padrao: {
    dark: {
      pageBg: "#14171f",
      panelBg: "#181c27",
      cardBg: "#1f2430",
      border: "#2b3242",
      text: "#eef1f7",
      textSecondary: "#9aa3b5",
      accent: "#3d7bf5",
      accentText: "#ffffff",
    },
    light: {
      pageBg: "#f4f5f8",
      panelBg: "#ffffff",
      cardBg: "#f0f2f6",
      border: "#dde1e8",
      text: "#1a1d24",
      textSecondary: "#5c6270",
      accent: "#2f6fed",
      accentText: "#ffffff",
    },
  },

  "alto-contraste": {
    dark: {
      pageBg: "#000000",
      panelBg: "#0a0a0a",
      cardBg: "#000000",
      border: "#ffffff",
      text: "#ffffff",
      textSecondary: "#e5e5e5",
      accent: "#ffff00",
      accentText: "#000000",
    },
    light: {
      pageBg: "#ffffff",
      panelBg: "#ffffff",
      cardBg: "#ffffff",
      border: "#000000",
      text: "#000000",
      textSecondary: "#1a1a1a",
      accent: "#0033cc",
      accentText: "#ffffff",
    },
  },

  daltonismo: {
    dark: {
      pageBg: "#14171f",
      panelBg: "#181c27",
      cardBg: "#1f2430",
      border: "#3a4152",
      text: "#f2f2f2",
      textSecondary: "#b8bdc9",
      accent: "#0072B2",
      accentText: "#ffffff",
    },
    light: {
      pageBg: "#f4f5f8",
      panelBg: "#ffffff",
      cardBg: "#eef1f6",
      border: "#c7ccd6",
      text: "#1a1d24",
      textSecondary: "#5c6272",
      accent: "#0072B2",
      accentText: "#ffffff",
    },
  },
};

export default function AccessibilidadePage() {
  const [fontKey, setFontKey] = useState<FontKey>("Médio");
  const [colorMode, setColorMode] = useState<ColorMode>("padrao");
  const [modoEscuro, setModoEscuro] = useState(true);
  const [contrast, setContrast] = useState(50);
  const [savedMsg, setSavedMsg] = useState("");
  const [activeNav, setActiveNav] = useState("Acessibilidade");
  const [fotoUrl, setFotoUrl] = useState<string | null>(null);
  const [painelContas, setPainelContas] =
    useState<PainelContas>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const fontSizePx = FONT_SIZES[fontKey];
  const sliderIndex = FONT_ORDER.indexOf(fontKey);

  const transitionDuration = "0.25s";

  const themeVars = useMemo(() => {
    return THEMES[colorMode][modoEscuro ? "dark" : "light"];
  }, [colorMode, modoEscuro]);

  const contrastFilter = `contrast(${1 + contrast / 100})`;

  const handleSave = () => {
    setSavedMsg("Preferências salvas.");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSavedMsg("");
    }, 2500);
  };

  const handleFotoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);
    setFotoUrl(url);
  };

  const styles = getStyles(themeVars, transitionDuration);

  return (
    <div style={styles.page}>

      {/* BARRA SUPERIOR */}
      <div style={styles.topbar}>

        {/* LOGO */}
        <div style={styles.logo}>
          <img
            src={logo}
            alt="Logo Maré"
            style={styles.logoImg}
          />
        </div>

        <div style={styles.topbarRight}>
          <button
            type="button"
            style={styles.iconButton}
            onClick={() =>
              setModoEscuro((valor) => !valor)
            }
            aria-pressed={modoEscuro}
            aria-label={
              modoEscuro
                ? "Mudar para modo claro"
                : "Mudar para modo escuro"
            }
          >
            {modoEscuro ? "☀" : "☾"}
          </button>

          <button
            type="button"
            style={styles.iconButton}
            aria-label="Adicionar"
          >
            +
          </button>

          <button
            type="button"
            style={styles.iconButton}
            aria-label="Perfil"
          >
            ◐
          </button>
        </div>
      </div>

      <div style={styles.body}>

        {/* SIDEBAR */}
        <aside style={styles.sidebar}>

          {/* CARTÃO DO PERFIL */}
          <div style={styles.profileCard}>

            <div style={styles.avatarWrap}>

              <button
                type="button"
                style={styles.avatarButton}
                onClick={() =>
                  fileInputRef.current?.click()
                }
                aria-label="Editar foto de perfil"
                title="Editar foto de perfil"
              >

                {fotoUrl ? (
                  <img
                    src={fotoUrl}
                    alt="Foto de perfil"
                    style={styles.avatarImg}
                  />
                ) : (
                  <span
                    style={styles.avatar}
                    aria-hidden="true"
                  >
                    ◯
                  </span>
                )}

                <span
                  style={styles.avatarEditBadge}
                  aria-hidden="true"
                >
                  ✎
                </span>

              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFotoChange}
                style={{ display: "none" }}
              />

            </div>

            <p style={styles.profileName}>
              Jurema
            </p>

          </div>

          {/* SEGUIDORES */}
          <div style={styles.statsRow}>

            <button
              type="button"
              style={styles.statItem}
              onClick={() =>
                setPainelContas("seguidores")
              }
              aria-haspopup="dialog"
            >
              <div style={styles.statNumber}>
                70
              </div>

              <div style={styles.statLabel}>
                Seguidores
              </div>
            </button>

            <button
              type="button"
              style={styles.statItem}
              onClick={() =>
                setPainelContas("seguindo")
              }
              aria-haspopup="dialog"
            >
              <div style={styles.statNumber}>
                87
              </div>

              <div style={styles.statLabel}>
                Seguindo
              </div>
            </button>

          </div>

          {/* MENU */}
          <nav
            style={styles.nav}
            aria-label="Navegação de configurações"
          >
            {[
              "Acessibilidade",
              "Notificações",
              "Perfil",
              "Sair",
            ].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() =>
                  setActiveNav(item)
                }
                style={{
                  ...styles.navItem,
                  ...(activeNav === item
                    ? styles.navItemActive
                    : {}),
                }}
                aria-current={
                  activeNav === item
                    ? "page"
                    : undefined
                }
              >
                {item}
              </button>
            ))}
          </nav>

        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <main style={styles.panel}>

          <h1 style={styles.h1}>
            Acessibilidade
          </h1>

          <p style={styles.subtitle}>
            Ajuste preferências de tamanho de fonte e
            cores para uma experiência mais confortável
            e acessível.
          </p>

          {/* TAMANHO DA FONTE */}
          <section
            style={styles.section}
            aria-labelledby="fonte-heading"
          >

            <h2
              id="fonte-heading"
              style={styles.h2}
            >
              Tamanho da Fonte
            </h2>

            <div style={styles.sliderRow}>

              <span style={styles.sliderEdgeLabel}>
                A pequeno
              </span>

              <input
                type="range"
                min={0}
                max={2}
                step={1}
                value={sliderIndex}
                onChange={(e) =>
                  setFontKey(
                    FONT_ORDER[
                      Number(e.target.value)
                    ]
                  )
                }
                style={styles.slider}
                aria-label="Tamanho da fonte"
                aria-valuetext={fontKey}
              />

              <span
                style={{
                  ...styles.sliderEdgeLabel,
                  fontSize: 20,
                }}
              >
                A grande
              </span>

            </div>

            <div
              style={styles.segmented}
              role="group"
              aria-label="Escolher tamanho de fonte"
            >
              {FONT_ORDER.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() =>
                    setFontKey(size)
                  }
                  style={{
                    ...styles.segmentBtn,
                    ...(fontKey === size
                      ? styles.segmentBtnActive
                      : {}),
                  }}
                  aria-pressed={
                    fontKey === size
                  }
                >
                  {size}
                </button>
              ))}
            </div>

            <div style={styles.previewCard}>

              <p style={styles.previewLabel}>
                Prévia ao vivo
              </p>

              <p
                style={{
                  ...styles.previewText,
                  fontSize: fontSizePx,
                }}
              >
                Este é um exemplo de texto com o
                tamanho selecionado ({fontKey}).
                Ajuste o slider acima para ver o
                efeito imediato.
              </p>

            </div>

          </section>

          {/* MODO DE CORES */}
          <section
            style={styles.section}
            aria-labelledby="cores-heading"
          >

            <h2
              id="cores-heading"
              style={styles.h2}
            >
              Modo de Cores
            </h2>

            <div
              style={styles.colorGrid}
              role="group"
              aria-label="Escolher modo de cores"
            >

              {COLOR_MODES.map((mode) => (
                <button
                  type="button"
                  key={mode.id}
                  onClick={() =>
                    setColorMode(mode.id)
                  }
                  style={{
                    ...styles.colorCard,
                    ...(colorMode === mode.id
                      ? styles.colorCardActive
                      : {}),
                  }}
                  aria-pressed={
                    colorMode === mode.id
                  }
                >

                  <div
                    style={styles.colorPreviewBox}
                  >

                    {mode.id === "padrao" && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(135deg, #1c2740, #3d7bf5)",
                          borderRadius: 6,
                        }}
                      />
                    )}

                    {mode.id === "alto-contraste" && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "#000",
                          border: "1px solid #fff",
                          borderRadius: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 11,
                        }}
                      >
                        AA
                      </div>
                    )}

                    {mode.id === "daltonismo" && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(135deg, #0072B2, #E69F00)",
                          borderRadius: 6,
                        }}
                      />
                    )}

                  </div>

                  <span style={styles.colorCardLabel}>
                    {mode.label}
                  </span>

                </button>
              ))}

            </div>

            {/* CONTRASTE */}
            <div style={styles.contrastRow}>

              <label
                style={styles.contrastLabel}
                htmlFor="contraste"
              >
                Intensidade do contraste
              </label>

              <span style={styles.contrastValue}>
                {contrast}%
              </span>

            </div>

            <input
              id="contraste"
              type="range"
              min={0}
              max={100}
              step={1}
              value={contrast}
              onChange={(e) =>
                setContrast(
                  Number(e.target.value)
                )
              }
              style={styles.slider}
              aria-label="Intensidade do contraste"
            />

            <div
              style={{
                ...styles.previewCard,
                marginTop: 16,
                filter: contrastFilter,
              }}
            >

              <p style={styles.previewLabel}>
                Prévia de contraste
              </p>

              <p
                style={{
                  ...styles.previewText,
                  fontSize: fontSizePx,
                }}
              >
                O texto e os elementos vão reagir
                ao contraste escolhido.
              </p>

            </div>

          </section>

          {/* SALVAR */}
          <button
            type="button"
            style={styles.saveButton}
            onClick={handleSave}
          >
            Salvar Preferências
          </button>

          <div
            role="status"
            aria-live="polite"
            style={styles.savedMsg}
          >
            {savedMsg}
          </div>

        </main>
      </div>

      {/* MODAL */}
      {painelContas && (
        <div
          style={styles.modalBackdrop}
          onClick={() =>
            setPainelContas(null)
          }
        >

          <div
            style={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contas-heading"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div style={styles.modalHeader}>

              <h2
                id="contas-heading"
                style={styles.modalTitle}
              >
                {painelContas === "seguidores"
                  ? "Seguidores"
                  : "Seguindo"}
              </h2>

              <button
                type="button"
                style={styles.iconButton}
                onClick={() =>
                  setPainelContas(null)
                }
                aria-label="Fechar"
              >
                ✕
              </button>

            </div>

            <ul style={styles.accountList}>

              {(painelContas === "seguidores"
                ? SEGUIDORES_MOCK
                : SEGUINDO_MOCK
              ).map((nome) => (

                <li
                  key={nome}
                  style={styles.accountItem}
                >

                  <span
                    style={styles.accountAvatar}
                    aria-hidden="true"
                  >
                    {nome.charAt(0)}
                  </span>

                  <span style={styles.accountName}>
                    {nome}
                  </span>

                </li>

              ))}

            </ul>

          </div>
        </div>
      )}

    </div>
  );
}

function getStyles(
  t: Theme,
  transitionDuration: string
) {
  return {

    page: {
      minHeight: "100vh",
      background: t.pageBg,
      color: t.text,
      fontFamily:
        "'Segoe UI', system-ui, -apple-system, sans-serif",
      transition:
        `background ${transitionDuration} ease`,
    },

    /* LOGO */
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    logoImg: {
      width: 130,
      height: 55,
      objectFit: "contain" as const,
      display: "block",
    },

    topbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 24px",
      borderBottom:
        `1px solid ${t.border}`,
      minHeight: 70,
    },

    topbarRight: {
      display: "flex",
      gap: 12,
    },

    iconButton: {
      background: "transparent",
      border: "none",
      color: t.text,
      fontSize: 18,
      cursor: "pointer",
      width: 32,
      height: 32,
      borderRadius: 8,
    },

    body: {
      display: "flex",
      gap: 24,
      padding: 24,
      maxWidth: 1100,
      margin: "0 auto",
    },

    sidebar: {
      width: 260,
      flexShrink: 0,
    },

    /* CARTÃO DO PERFIL MAIOR */
    profileCard: {
      background: t.panelBg,
      border: `1px solid ${t.border}`,
      borderRadius: 12,
      padding: "35px 20px",
      textAlign: "center" as const,
      marginBottom: 16,
    },

    /* ESPAÇO DA FOTO */
    avatarWrap: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 16,
    },

    /* CÍRCULO DA FOTO MAIOR */
    avatarButton: {
      position: "relative" as const,
      width: 80,
      height: 80,
      padding: 0,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      borderRadius: "50%",
    },

    /* CÍRCULO VAZIO */
    avatar: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      border:
        `2px solid ${t.textSecondary}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 32,
      color: t.textSecondary,
      boxSizing: "border-box" as const,
    },

    /* FOTO DO USUÁRIO */
    avatarImg: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      objectFit: "cover" as const,
      display: "block",
      border:
        `2px solid ${t.textSecondary}`,
      boxSizing: "border-box" as const,
    },

    /* BOTÃO DE EDITAR */
    avatarEditBadge: {
      position: "absolute" as const,
      bottom: -2,
      right: -2,
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: t.accent,
      color: t.accentText,
      fontSize: 13,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border:
        `2px solid ${t.panelBg}`,
      boxSizing: "border-box" as const,
    },

    profileName: {
      fontSize: 16,
      color: t.textSecondary,
      margin: 0,
    },

    statsRow: {
      display: "flex",
      background: t.panelBg,
      border: `1px solid ${t.border}`,
      borderRadius: 12,
      marginBottom: 16,
      overflow: "hidden" as const,
    },

    statItem: {
      flex: 1,
      textAlign: "center" as const,
      padding: "14px 0",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: t.text,
    },

    statNumber: {
      fontSize: 17,
      fontWeight: 600,
    },

    statLabel: {
      fontSize: 12,
      color: t.textSecondary,
      marginTop: 2,
    },

    nav: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 6,
    },

    navItem: {
      textAlign: "left" as const,
      background: "transparent",
      border: "none",
      color: t.textSecondary,
      fontSize: 14,
      padding: "10px 14px",
      borderRadius: 8,
      cursor: "pointer",
      transition:
        `background ${transitionDuration} ease, color ${transitionDuration} ease`,
    },

    navItemActive: {
      background: t.cardBg,
      color: t.accent,
      border: `1px solid ${t.border}`,
      fontWeight: 600,
    },

    panel: {
      flex: 1,
      background: t.panelBg,
      border: `1px solid ${t.border}`,
      borderRadius: 12,
      padding: "28px 32px 36px",
    },

    h1: {
      fontSize: 30,
      color: t.accent,
      margin: "0 0 8px",
      fontWeight: 500,
    },

    subtitle: {
      color: t.textSecondary,
      fontSize: 14,
      margin: "0 0 28px",
    },

    section: {
      marginBottom: 30,
    },

    h2: {
      fontSize: 16,
      color: t.accent,
      margin: "0 0 14px",
      fontWeight: 500,
    },

    sliderRow: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14,
    },

    sliderEdgeLabel: {
      fontSize: 12,
      color: t.textSecondary,
      whiteSpace: "nowrap" as const,
    },

    slider: {
      flex: 1,
      accentColor: t.accent,
      height: 4,
    },

    segmented: {
      display: "flex",
      gap: 8,
      marginBottom: 16,
    },

    segmentBtn: {
      flex: 1,
      padding: "10px 0",
      borderRadius: 8,
      border:
        `1px solid ${t.border}`,
      background: t.cardBg,
      color: t.textSecondary,
      fontSize: 13,
      cursor: "pointer",
      transition:
        `background ${transitionDuration} ease, color ${transitionDuration} ease`,
    },

    segmentBtnActive: {
      background: t.accent,
      color: t.accentText,
      borderColor: t.accent,
      fontWeight: 600,
    },

    previewCard: {
      background: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: 10,
      padding: "14px 16px",
      transition:
        `filter ${transitionDuration} ease`,
    },

    previewLabel: {
      fontSize: 11,
      color: t.textSecondary,
      margin: "0 0 6px",
      textTransform: "uppercase" as const,
      letterSpacing: 0.5,
    },

    previewText: {
      margin: 0,
      lineHeight: 1.6,
      color: t.text,
      transition:
        `font-size ${transitionDuration} ease`,
    },

    colorGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(3, 1fr)",
      gap: 12,
      marginBottom: 20,
    },

    colorCard: {
      background: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: 10,
      padding: 10,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column" as const,
      gap: 8,
      transition:
        `border-color ${transitionDuration} ease`,
    },

    colorCardActive: {
      border:
        `2px solid ${t.accent}`,
    },

    colorPreviewBox: {
      height: 60,
      borderRadius: 6,
      overflow: "hidden" as const,
    },

    colorCardLabel: {
      fontSize: 12,
      color: t.textSecondary,
      textAlign: "left" as const,
    },

    contrastRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8,
      fontSize: 12,
    },

    contrastLabel: {
      color: t.textSecondary,
    },

    contrastValue: {
      color: t.text,
    },

    saveButton: {
      width: "100%",
      padding: "13px 0",
      borderRadius: 10,
      border: "none",
      background: t.accent,
      color: t.accentText,
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer",
      marginTop: 10,
    },

    savedMsg: {
      textAlign: "center" as const,
      color: t.accent,
      fontSize: 13,
      marginTop: 10,
      minHeight: 18,
    },

    modalBackdrop: {
      position: "fixed" as const,
      inset: 0,
      background:
        "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 50,
    },

    modalCard: {
      background: t.panelBg,
      border:
        `1px solid ${t.border}`,
      borderRadius: 12,
      width: "100%",
      maxWidth: 380,
      maxHeight: "70vh",
      display: "flex",
      flexDirection: "column" as const,
      overflow: "hidden" as const,
    },

    modalHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px",
      borderBottom:
        `1px solid ${t.border}`,
    },

    modalTitle: {
      fontSize: 16,
      fontWeight: 500,
      margin: 0,
      color: t.accent,
    },

    accountList: {
      listStyle: "none",
      margin: 0,
      padding: "8px",
      overflowY: "auto" as const,
    },

    accountItem: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px",
      borderRadius: 8,
    },

    accountAvatar: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: t.cardBg,
      border:
        `1px solid ${t.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      color: t.textSecondary,
      flexShrink: 0,
    },

    accountName: {
      fontSize: 14,
      color: t.text,
    },
  };
}