import { useMediaQuery } from 'react-responsive';
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Container from 'components/Container/Container';
import MainWrapperContent from 'components/ContentPageWrappers/MainWrapperContent';
import MediaThumb from 'components/MediaThumb/MediaThumb';
import TitlePages from 'components/TitlePages/TitlePages';
import LeftWrapperContent from 'components/ContentPageWrappers/LeftWrapperContent';
import RigthWrapperContent from 'components/ContentPageWrappers/RigthWrapperContent';
import DescriptionAccentPage from 'components/contentPagesComponents/DescriptionAccentPage';
import ListField from 'components/contentPagesComponents/ListField';
import ButtonApplication from 'components/ButtonApplication/ButtonApplication';

export default function ConsultationPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const namePage = 'Консультація';
  return (
    <>
      <section>
        <Container>
          <MainWrapperContent>
            {isMobile && (
              <>
                <BreadCrumbs namePage={namePage} />
                <TitlePages namePage={namePage} />
                <MediaThumb />
                <DescriptionAccentPage />
                <ListField />
              </>
            )}
            {isTablet && (
              <>
                <LeftWrapperContent>
                  <BreadCrumbs namePage={namePage} />
                  <TitlePages namePage={namePage} />
                  <DescriptionAccentPage />
                  <ListField />
                </LeftWrapperContent>
                <RigthWrapperContent>
                  <MediaThumb />
                </RigthWrapperContent>
              </>
            )}
            <ButtonApplication />
          </MainWrapperContent>
        </Container>
      </section>
    </>
  );
}
