import {
  ShowModel,
  ShowListResponse,
  ShowDetailResponse,
  ShowListData,
  ShowDetail,
} from './festival.types';

class FestivalRepository {
  private readonly shows: ShowModel[] = [
    {
      showId: 1,
      title: '변호영 밴드',
      name: '멋쟁이사자처럼',
      instagram: 'https://www.instagram.com/likelion_yonsei/',
      section: '동문광장',
      start_at: '17:30',
      finish_at: '18:00',
      description: '이 공연은 멋쟁이사자처럼 부원들로 구성된 밴드입니다.',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/1/img1.jpg',
      day: 1,
      isLive: true,
    },
    {
      showId: 2,
      title: '김도현 밴드',
      name: '연세대 음악 동아리',
      instagram: 'https://www.instagram.com/music_yonsei/',
      section: '노천극장',
      start_at: '18:30',
      finish_at: '19:00',
      description: '연세대 음악 동아리의 감미로운 공연',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/1/img2.jpg',
      day: 1,
      isLive: false,
    },
    {
      showId: 3,
      title: '유다빈 밴드',
      name: '유다빈과 친구들',
      instagram: 'https://www.instagram.com/udabin_friends/',
      section: '동문광장',
      start_at: '19:30',
      finish_at: '20:00',
      description: '유다빈이 이끄는 밴드의 열정적인 공연',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/1/img3.jpg',
      day: 1,
      isLive: true,
    },
    {
      showId: 4,
      title: '재즈 앙상블',
      name: '연세 재즈',
      instagram: 'https://www.instagram.com/yonsei_jazz/',
      section: '노천극장',
      start_at: '16:00',
      finish_at: '16:30',
      description: '연세 재즈 동아리의 모던 재즈 공연',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/2/img1.jpg',
      day: 2,
      isLive: false,
    },
    {
      showId: 5,
      title: '힙합 크루',
      name: '연세 힙합',
      instagram: 'https://www.instagram.com/hiphop_yonsei/',
      section: '동문광장',
      start_at: '17:00',
      finish_at: '17:30',
      description: '연세 힙합 크루의 화려한 댄스 공연',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/2/img2.jpg',
      day: 2,
      isLive: true,
    },
    {
      showId: 6,
      title: '클래식 오케스트라',
      name: '연세 클래식',
      instagram: 'https://www.instagram.com/classic_yonsei/',
      section: '백양홀',
      start_at: '18:00',
      finish_at: '19:00',
      description: '연세 클래식 오케스트라의 웅장한 공연',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/2/img3.jpg',
      day: 2,
      isLive: false,
    },
    {
      showId: 7,
      title: '이준영 밴드',
      name: '이준영과 친구들',
      instagram: 'https://www.instagram.com/leejunyoung_band/',
      section: '동문광장',
      start_at: '17:30',
      finish_at: '18:00',
      description: '이준영 밴드의 록 스피릿 넘치는 공연',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/3/img1.jpg',
      day: 3,
      isLive: false,
    },
    {
      showId: 8,
      title: '고선태 밴드',
      name: '고선태와 밴드',
      instagram: 'https://www.instagram.com/gosuntae_band/',
      section: '노천극장',
      start_at: '17:30',
      finish_at: '18:00',
      description: '고선태 밴드의 감성적인 발라드 공연',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/3/img2.jpg',
      day: 3,
      isLive: false,
    },
    {
      showId: 9,
      title: '팝 보컬 그룹',
      name: '연세 싱어즈',
      instagram: 'https://www.instagram.com/yonsei_singers/',
      section: '백양홀',
      start_at: '19:00',
      finish_at: '20:00',
      description: '연세 싱어즈의 하모니 가득한 보컬 공연',
      photo:
        'https://my-bucket.s3.ap-northeast-2.amazonaws.com/notices/3/img3.jpg',
      day: 3,
      isLive: true,
    },
  ];

  async getShowList(day: string): Promise<ShowListResponse> {
    const dayNumber = parseInt(day);

    const filteredShows = this.shows.filter(show => show.day === dayNumber);
    const liveShows = filteredShows
      .filter(show => show.isLive)
      .map(show => ({
        showId: show.showId,
        title: show.title,
        photo: show.photo,
      }));

    const normalShows = filteredShows.map(show => ({
      showId: show.showId,
      title: show.title,
      start_at: show.start_at,
      finish_at: show.finish_at,
      photo: show.photo,
      section: show.section,
    }));

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      status: 200,
      success: true,
      message: '공연 정보 반환 성공',
      data: {
        live: liveShows,
        show: normalShows,
      },
    };
  }

  async getShowDetail(showId: string): Promise<ShowDetailResponse> {
    const id = parseInt(showId);
    const show = this.shows.find(s => s.showId === id);

    if (!show) {
      throw new Error('showId에 맞는 공연 정보가 존재하지 않습니다');
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      status: 200,
      success: true,
      message: '공연 세부 정보 반환 성공',
      data: {
        showId: show.showId,
        title: show.title,
        name: show.name,
        instagram: show.instagram,
        section: show.section,
        start_at: show.start_at,
        finish_at: show.finish_at,
        description: show.description,
        photo: show.photo,
      } as ShowDetail,
    };
  }
}

export const festivalRepository = new FestivalRepository();
