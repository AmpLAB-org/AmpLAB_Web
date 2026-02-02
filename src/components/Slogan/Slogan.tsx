import * as S from "./Slogan.styles";

interface Props {
    head_details: React.ReactNode;
    strong: string;
    tail_details?: React.ReactNode;
}

const Slogan = ({ strong, head_details, tail_details }: Props) => {
    return (
        <S.SloganContainer>
            <S.SloganText>
                {head_details} <strong>{strong}</strong> {tail_details}
            </S.SloganText>
        </S.SloganContainer>
    );
};

export default Slogan;