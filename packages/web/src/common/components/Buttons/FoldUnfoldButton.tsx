import TextButton from "@sparcs-students/web/common/components/Buttons/TextButton";

interface FoldUnfoldButtonProps {
  folded: boolean;
  setFolded: (isFold: boolean) => void;
  disabled?: boolean;
}

const FoldUnfoldButton = ({
  folded,
  setFolded,
  disabled = false,
}: FoldUnfoldButtonProps) => (
  <TextButton
    disabled={disabled}
    text={folded ? `펼치기` : `접기`}
    onClick={() => setFolded(!folded)}
  />
);

export default FoldUnfoldButton;
