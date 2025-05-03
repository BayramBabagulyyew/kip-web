<template>
  <div class="table">
    <table>
      <slot />
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table {
  width: 100%;
  overflow-y: auto;
  height: 75vh;
  table {
    width: 100%;
    border-collapse: collapse;
    position: relative;
    thead {
      margin-bottom: 14px;
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      tr {
        th {
          background-color: var(--gray-1000);
          border-bottom: 1px solid #e9e7fd;
          padding: 14px 20px;
          color: var(--primary);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          &:first-child {
            width: 40px;
            text-align: center;
          }
          &:nth-child(2) {
            text-align: left;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          color: #23272e;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
          padding: 10px;
          background-color: #fff;
          &:not(:nth-child(2)) {
            text-align: center;
          }
          &:first-child {
            text-align: center;
          }
          &.star {
            width: 170px;
          }
          &.date {
            text-align: center;
          }
          img {
            width: 90px;
            height: 61px;
          }
          &:last-child {
            width: 100px;
          }
          &:deep() {
            h1 {
              font-size: 12px !important;
              color: inherit !important;
            }
          }
          &.description {
            p {
              display: none;

              &:first-child {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2;
                -webkit-box-orient: vertical;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  .controller {
    display: flex;
    gap: 10px;
    span {
      padding: 10px;
      border-radius: 50%;
      transition: 0.2s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.07);
      }
      &:first-child {
        &:hover {
          background-color: rgba(255, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>
