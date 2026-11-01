"use client";

import React from "react";
import { Terminal } from "lucide-react";

// --- Official Tech Vector Icons (Monochrome Black) ---

const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.914 2c-3.13 0-2.94 1.358-2.94 1.358l.004 1.408h2.986v.425H6.28S4.2 4.954 4.2 8.084c0 3.13 1.815 3.018 1.815 3.018h1.082v-1.52c0-1.728 1.488-1.728 1.488-1.728h2.956c1.442 0 1.442-1.396 1.442-1.396V3.396S13.06 2 11.914 2zm-1.636 1.016a.62.62 0 1 1 0 1.24.62.62 0 0 1 0-1.24zM12.086 22c3.13 0 2.94-1.358 2.94-1.358l-.004-1.408H12.036v-.425h5.684s2.08.237 2.08-2.893c0-3.13-1.815-3.018-1.815-3.018h-1.082v1.52c0 1.728-1.488 1.728-1.488 1.728h-2.956c-1.442 0-1.442 1.396-1.442 1.396v3.068S10.94 22 12.086 22zm1.636-1.016a.62.62 0 1 1 0-1.24.62.62 0 0 1 0 1.24z" />
  </svg>
);

const JavaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8.85 17.84s-.97.22-1.38.35c-1.16.36-.78 1.05.61.95 2.1-.15 3.33-.28 5.76-.73 0 0 .8.46 1.79.79-3.41.97-9.5.87-8.8-1.07.45-1.27 2.02-.29 2.02-.29zm7.04-1.3c2.08-1.06 1.11-2.07.44-1.93-.17.03-.24.08-.24.08s.1-.15.28-.27c1.36-.92-.68-2.45-3.41-.95 0 0 1.94-.88 1.07-2.01-.84-1.1-2.18-.84-3.32.22-.57.54-.73 1.09-.73 1.09s.34-.35.91-.49c1.68-.42 2.37.7 1.01 1.76-1.74 1.35.43 2.11 3.99 2.5zm-5.74 3.79c3.08-.2 6.55-.99 6.55-.99s-.75.44-1.43.71c-2.48.97-7.46.99-9.17.15-.31-.15-.47-.32-.47-.5 0-.61 1.63-.44 4.52.63zm8.99-6.42c.86-.45 1.54-1.12 1.54-1.89 0-1.81-3.66-2.14-3.66-2.14s.74.34.8 1.02c.07.82-.94 1.4-2.11 1.73 0 0 .5-.32.55-.77.06-.52-.39-.99-1.22-1.27-.99-.34-2.29-.27-3.21.36-.88.6-.68 1.3-.09 1.83 1.25 1.13 4.96.67 7.39-1.27v.4zM4.5 21.5c4.7 1.02 12.02.76 15.22-.64.48-.21.84-.46.84-.73 0-.82-1.95-1.19-3.76-1.33 0 0 .59.42-.32.74-2.11.75-8.22.95-11.98-.04 0 0-.75.75 0 1zm12.38-16.89c.32.88-.2 1.89-1.2 2.39-.77.39-1.63.29-2.03-.23-.33-.43-.16-1.02.39-1.42 1.14-.83 2.45-.98 2.84-.74z" />
  </svg>
);

const CppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm-1.8 13.5c-2.1 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7c1.3 0 2.4.6 3 1.6l-1.3.8c-.4-.6-1-1-1.7-1-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c.7 0 1.3-.4 1.7-1l1.3.8c-.6 1-1.7 1.6-3 1.6zm5.8-3.1h-1.2v1.2h-.8v-1.2h-1.2v-.8h1.2v-1.2h.8v1.2h1.2v.8zm3.2 0H18v1.2h-.8v-1.2H16v-.8h1.2v-1.2h.8v1.2h1.2v.8z" />
  </svg>
);

const DotNetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3.5 16.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3.5.3V7.2h2.2l4.8 6.5V7.2h2.2v9.6h-2.1l-4.9-6.6v6.6H7zm11.2-7.8h4.8v1.8h-2.8v2.1h2.6v1.8h-2.6v2.1h2.8v1.8h-4.8V9z" />
  </svg>
);

const NodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a1.5 1.5 0 0 0-.75.2l-7.5 4.33A1.5 1.5 0 0 0 3 7.83v8.66a1.5 1.5 0 0 0 .75 1.3l7.5 4.33a1.5 1.5 0 0 0 1.5 0l7.5-4.33a1.5 1.5 0 0 0 .75-1.3V7.83a1.5 1.5 0 0 0-.75-1.3l-7.5-4.33A1.5 1.5 0 0 0 12 2zm-.25 3.35 6 3.46v6.93l-6 3.46-6-3.46V8.81l6-3.46zm-.47 3.32c-1.44 0-2.33.88-2.33 2.18 0 1.3.82 2.05 2.22 2.37l.73.17c.69.16 1.04.4 1.04.85 0 .5-.47.85-1.2.85-.75 0-1.28-.32-1.55-.91l-1.12.63c.43.95 1.39 1.48 2.65 1.48 1.53 0 2.47-.85 2.47-2.18 0-1.27-.8-1.99-2.2-2.31l-.73-.17c-.71-.16-1.06-.41-1.06-.88 0-.48.44-.82 1.13-.82.68 0 1.17.29 1.43.79l1.1-.64c-.4-.84-1.27-1.37-2.38-1.37z" />
  </svg>
);

const TypeScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 3h18v18H3V3zm8.5 7.5H6.8V12h1.8v6.7h2.1V12h1.8v-1.5zm5.7 1.8c-1.1 0-1.9.5-2.3 1.2l1.5.9c.3-.4.7-.6 1.1-.6.5 0 .9.2.9.6 0 .4-.3.5-.9.7l-.8.3c-1.3.5-1.9 1.2-1.9 2.2 0 1.5 1.1 2.3 2.6 2.3 1.2 0 2.1-.5 2.6-1.4l-1.5-.9c-.3.5-.7.8-1.2.8-.5 0-.9-.2-.9-.6 0-.3.2-.5.8-.7l.8-.3c1.4-.5 2-1.2 2-2.3 0-1.4-1.1-2.3-2.7-2.3z" />
  </svg>
);

const DockerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.98 11.08h-2.11V8.97h2.11v2.11zm-2.6 0H9.27V8.97h2.11v2.11zm-2.6 0H6.67V8.97h2.11v2.11zm5.2 0h2.11V8.97h-2.11v2.11zm2.6 0h2.11V8.97h-2.11v2.11zm-5.2-2.6h2.11V6.37h-2.11v2.11zm-2.6 0h2.11V6.37H8.78v2.11zm5.2-2.6h2.11V3.77h-2.11v2.11zm8.38 5.7c-.42-.3-1.47-.4-2.27.18-.32.23-.62.53-.94.75-.41.28-.86.42-1.39.42H2.2c-.37 0-.7.22-.85.56-.63 1.45-.63 3.4.15 4.88 1.15 2.17 3.51 3.51 6.54 3.51 6.22 0 10.96-3.88 12.18-9.45.65.04 1.7-.17 2.06-.85.12-.22.12-.5-.07-.72-.18-.21-.46-.28-.73-.28h-.12l.14-.15z" />
  </svg>
);

const KubernetesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.2a1 1 0 0 0-.5.13L4.2 6.55a1 1 0 0 0-.5.87v8.4a1 1 0 0 0 .5.86l7.3 4.22a1 1 0 0 0 1 0l7.3-4.22a1 1 0 0 0 .5-.86v-8.4a1 1 0 0 0-.5-.87L12.5 2.33A1 1 0 0 0 12 2.2zm0 2.31 5.8 3.35v6.7L12 17.91l-5.8-3.35v-6.7L12 4.51zm0 2.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4zm-1 1.2v4h2v-4h-2z" />
  </svg>
);

const PostgresIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-.8.8-1.9 1.3-3.1 1.4-.4.03-.8-.1-.9-.5-.1-.4.1-.8.5-.9 1-.1 1.8-.5 2.4-1.1.6-.6.9-1.4.9-2.3 0-1.8-1.4-3.3-3.2-3.4h-.3c-1.8.1-3.2 1.6-3.2 3.4 0 .9.3 1.7.9 2.3.4.4.6.8.5.9-.1.4-.5.5-.9.5-1.2-.1-2.3-.6-3.1-1.4-1-1-1.6-2.4-1.6-3.9 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5c0 1.5-.6 2.9-1.6 3.9z" />
  </svg>
);

const RedisIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2.5 7.8 12 3l9.5 4.8-4.2 2.1L12 7.2 6.7 9.9 2.5 7.8zm0 4.2 4.2 2.1L12 11.4l5.3 2.7 4.2-2.1v2.4L12 19.2l-9.5-4.8V12zm0 4.8 4.2 2.1L12 16.2l5.3 2.7 4.2-2.1V21L12 24l-9.5-3v-4.2z" />
  </svg>
);

const KafkaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="5" cy="12" r="3" />
    <circle cx="19" cy="6" r="3" />
    <circle cx="19" cy="18" r="3" />
    <path d="m7.8 10.6 8.4-3.2m-8.4 6 8.4 3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GraphQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a1.8 1.8 0 0 0-1.6 1L3.9 7.7a1.8 1.8 0 0 0-.9 1.6v9.4a1.8 1.8 0 0 0 .9 1.6l6.5 4.7a1.8 1.8 0 0 0 2.2 0l6.5-4.7a1.8 1.8 0 0 0 .9-1.6V9.3a1.8 1.8 0 0 0-.9-1.6L13.6 3A1.8 1.8 0 0 0 12 2zm0 2.2 5.5 3.9-3.2 5.5H9.7L6.5 8.1 12 4.2zm-6.8 5.4 2.8 4.8v5.5l-4-2.9V9.6h1.2zm13.6 0v7.8l-4 2.9v-5.5l2.8-4.8h1.2zM12 15.1l2.4 4.1H9.6L12 15.1z" />
  </svg>
);

const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
  </svg>
);

const GoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 10.2c0-1.8 1.3-3.2 3.4-3.2 1.6 0 2.6.8 3 1.9l-1.5.7c-.3-.6-.8-.9-1.5-.9-1.1 0-1.8.8-1.8 1.8 0 1 .7 1.8 1.8 1.8.8 0 1.3-.4 1.5-.9H4.8v-1.4h3.6v3.7H7.3l-.2-.8c-.6.6-1.3 1-2.2 1-2.1 0-3.4-1.5-3.4-3.4zm10.7-3.2c2.4 0 4.1 1.6 4.1 3.5 0 1.9-1.7 3.5-4.1 3.5-2.4 0-4.1-1.6-4.1-3.5 0-1.9 1.7-3.5 4.1-3.5zm0 1.6c-1.4 0-2.3 1-2.3 2 0 1 .9 2 2.3 2 1.4 0 2.3-1 2.3-2 0-1-.9-2-2.3-2zM18 10h5v1.5h-5V10zm1.5-2.5h3.5V9h-3.5V7.5zm1 5h2.5V14h-2.5v-1.5z" />
  </svg>
);

const AwsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.7 11.2c-.3 0-.6.1-.8.2-.5.3-.7.7-.7 1.2 0 .9.6 1.4 1.7 1.4.6 0 1.2-.2 1.7-.5v-1.6c-.5-.5-1.2-.7-1.9-.7zm4.2 3.8h-1.5v-.8c-.7.6-1.6 1-2.6 1-1.7 0-2.8-.9-2.8-2.4 0-1.3.8-2.2 2.2-2.6.7-.2 1.7-.3 2.5-.3v-.3c0-.6-.4-.9-1.3-.9-.7 0-1.4.2-2 .5l-.5-1.1c.8-.5 1.8-.7 2.8-.7 2 0 3.2.9 3.2 2.7v4.4zm3.8-6.8h1.6l2.1 6.5 2-6.5h1.6l-2.8 8.1h-1.6L16.7 9.5l-2 6.7h-1.6l-2.7-8h1.6l2 6.5 1.7-6.5zM3.8 19.3c5.3 2.9 12.3 2.2 16.4-1.2l.4.5c-4.4 3.7-12 4.4-17.6 1.3l.8-.6zm16.7-1.8c.4-.5.8-1.2 1-1.8.1.7.3 1.5.8 2.1l-1.8-.3z" />
  </svg>
);

const GcpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
  </svg>
);

const FastApiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4H8l5-8v5h3l-5 7v0z" />
  </svg>
);

const TerraformIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.7 6.2v4.8l4.2-2.4V3.8l-4.2 2.4zm-5.4 0v4.8l4.2-2.4V3.8L9.3 6.2zM9.3 13v4.8l4.2-2.4V10.6L9.3 13zm-5.4-3.8v4.8l4.2-2.4V6.8L3.9 9.2zm10.8 6.8v4.8l4.2-2.4V16l-4.2 2.4z" />
  </svg>
);

const CloudflareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.8 10.3c-.4-2.8-2.7-4.9-5.6-4.9-2.2 0-4.2 1.3-5 3.3-2.1.2-3.8 2-3.8 4.2 0 2.3 1.9 4.2 4.2 4.2h10.4c2.1 0 3.8-1.7 3.8-3.8 0-1.9-1.4-3.5-3.3-3.8l-.7.8zm-1.8 5.6H8.5c-1.3 0-2.4-1.1-2.4-2.4 0-1.2.9-2.2 2.1-2.4l.7-.1.3-.7c.5-1.5 1.9-2.5 3.6-2.5 2 0 3.7 1.5 3.9 3.5l.2 1.2 1.2.2c1 .2 1.7 1.1 1.7 2.1 0 1.2-1 2.2-2.2 2.2z" />
  </svg>
);

const TailwindIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 6c-4 0-6.5 2-7.5 6 1.5-2 3.2-2.7 5.2-2.2 1.1.3 2 1.2 2.9 2.1C14 13.4 15.8 15 20 15c4 0 6.5-2 7.5-6-1.5 2-3.2 2.7-5.2 2.2-1.1-.3-2-1.2-2.9-2.1C18 7.6 16.2 6 12 6zM4.5 13.5C2.5 13.5 1 14.5.5 16.5c1-1 2.2-1.3 3.5-1.1.8.2 1.4.7 2 1.3 1 1 2.2 2.2 5 2.2 2 0 3.5-1 4-3-1 1-2.2 1.3-3.5 1.1-.8-.2-1.4-.7-2-1.3-1-1-2.2-2.2-5-2.2z" />
  </svg>
);

const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const NextJsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.8L9.2 8.6V16H7.6V8h1.8l6.6 8.2v-8.2h1.6v8.8h-1.8z" />
  </svg>
);

interface TechItem {
  name: string;
  desc: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const row1Techs: TechItem[] = [
  { name: "Python", desc: "FastAPI & AI Pipelines", icon: PythonIcon },
  { name: "Java", desc: "Enterprise Spring Systems", icon: JavaIcon },
  { name: "C++", desc: "High-Performance Core Engines", icon: CppIcon },
  { name: ".NET", desc: "Enterprise Cloud Microservices", icon: DotNetIcon },
  { name: "Node.js", desc: "Event-driven runtime", icon: NodeIcon },
  { name: "TypeScript", desc: "End-to-end type safety", icon: TypeScriptIcon },
  { name: "Go (Golang)", desc: "High-throughput microservices", icon: GoIcon },
  { name: "React", desc: "Dynamic UI component architectures", icon: ReactIcon },
  { name: "Next.js 15", desc: "SSR & Edge execution", icon: NextJsIcon },
  { name: "Tailwind CSS", desc: "Modern utility design systems", icon: TailwindIcon },
  { name: "FastAPI", desc: "Asynchronous Python APIs", icon: FastApiIcon },
  { name: "GraphQL", desc: "Type-safe federated APIs", icon: GraphQLIcon },
];

const row2Techs: TechItem[] = [
  { name: "Docker", desc: "Containerized deployments", icon: DockerIcon },
  { name: "Kubernetes", desc: "Auto-scaling orchestration", icon: KubernetesIcon },
  { name: "PostgreSQL", desc: "ACID & pgvector stores", icon: PostgresIcon },
  { name: "Redis", desc: "In-memory caching & PubSub", icon: RedisIcon },
  { name: "Kafka", desc: "High-volume event streaming", icon: KafkaIcon },
  { name: "AWS", desc: "EKS, Lambda & S3 Infra", icon: AwsIcon },
  { name: "Google Cloud", desc: "GKE & Vertex AI clusters", icon: GcpIcon },
  { name: "Terraform", desc: "Declarative cloud IaC", icon: TerraformIcon },
  { name: "Cloudflare", desc: "Edge CDN & DDoS protection", icon: CloudflareIcon },
  { name: "GitHub Actions", desc: "Continuous CI/CD deploy", icon: GitHubIcon },
];

export const EnterpriseTechStackSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-black/60 backdrop-blur-2xl text-white border-y border-white/10 overflow-hidden relative" id="tech-stack">
      {/* Subtle Monochrome Specular Ambient Sheen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Header Container (Constrained & Centered) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md text-xs font-semibold text-white uppercase tracking-wider mb-4 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span>Production Engineering Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-white mb-4">
            Proven Technologies Engineered for{" "}
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              High Concurrency
            </span>
          </h2>

          <p className="text-base text-neutral-400 max-w-2xl mx-auto font-normal">
            We avoid experimental fluff. Our engineering pods build exclusively on battle-tested frameworks, hardened cloud primitives, and enterprise-grade data platforms.
          </p>
        </div>
      </div>

      {/* Full-Width 100% Screen Edge-to-Edge Marquee (Unconstrained across entire viewport) */}
      <div className="w-full relative z-10 overflow-hidden space-y-4 sm:space-y-5">
        
        {/* Row 1: Left-to-Right Full Screen Width Smooth Marquee */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="flex gap-4 animate-marquee-ltr">
            {[...row1Techs, ...row1Techs].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="shrink-0 flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-lg hover:shadow-2xl transition-all cursor-default group"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.08] border border-white/15 shadow-xs text-white group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white tracking-tight">{tech.name}</div>
                    <div className="text-[10px] text-neutral-400 font-medium">{tech.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Right-to-Left Full Screen Width Smooth Marquee */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="flex gap-4 animate-marquee-rtl">
            {[...row2Techs, ...row2Techs].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="shrink-0 flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-lg hover:shadow-2xl transition-all cursor-default group"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.08] border border-white/15 shadow-xs text-white group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white tracking-tight">{tech.name}</div>
                    <div className="text-[10px] text-neutral-400 font-medium">{tech.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
