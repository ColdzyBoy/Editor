import { reactive } from 'vue';

// Image 상태 인터페이스 정의
interface imageState {
  image: HTMLImageElement | null; // Image 객체 또는 null
}

// 공유 상태 생성
const imageState: imageState = reactive({
  image: null,
});

// 상태 업데이트 함수
export function setImage(newImage: HTMLImageElement): void {
    imageState.image = newImage;
}

// 상태 가져오기 함수
export function getImage(): HTMLImageElement | null {
  return imageState.image;
}

// 공유 상태 자체를 반환
export function useImageState(): imageState {
  return imageState;
}
