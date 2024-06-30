import { styled } from "styled-components";

interface MediaWrapperProps {
  ratio?: [number, number];
}

export const MediaWrapper = styled.div<MediaWrapperProps>`
  position: relative;

  --n: ${({ ratio }) => (ratio ? ratio[0] : 1)};
  --d: ${({ ratio }) => (ratio ? ratio[1] : 1)};

  aspect-ratio: var(--n) / var(--d);

  ${(props) =>
    props.ratio &&
    `@support not (aspect-ratio: 1 / 1) {
    padding-bottom: calc(var(--d) / var(--n) * 100%);
  }`}

  > * {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
