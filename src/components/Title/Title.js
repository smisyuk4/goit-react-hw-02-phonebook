import { Section, SectionTitle } from './Title.styled';

export const Title = ({ title, children }) => {
    return (
        <Section>
            <SectionTitle>{title}</SectionTitle>

            {children}
        </Section>
    );
};
